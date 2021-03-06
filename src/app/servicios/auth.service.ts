import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


import { Jugador } from '../clases/jugador';
import { Subscriber } from 'rxjs';


@Injectable()

export class AuthService {

  userToken: string;
  emailUsuario: string;


  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyB-P7vtT3VkiurKd7M2mityjSj6QrxO1xs';

  constructor(private http: HttpClient, private route: Router) {
    this.LeerToken();
  }

  Logout() {
      localStorage.removeItem('token');
  }

  Login(usuario: Jugador) {


    
    firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.password).then(
    resp => {
      firebase.auth().currentUser.getIdToken().then(
       token => {
         this.userToken = token;
         this.route.navigate(['/Principal']);
       } 

      )
    })
    

    const authData = {
      ...usuario,
      returnSecureToken: true };

    return this.http.post(`${ this.url }signInWithPassword?key=${ this.apikey }`, authData
    ).pipe(
      map( resp => {
        // CargarEmail(resp['idToken']);
        this.GuardarToken(resp['idToken']);
        console.log(resp);
        this.emailUsuario = (resp['email']);
        return resp;
      })
    );

  }

  ObtenerUsuario(usuario: Jugador) {

    return this.http.post(`${ this.url }lookup?key=${ this.apikey }`, usuario
    ).pipe(
      map( resp => {
       console.log(resp['email']);
        this.emailUsuario =  resp['email'];
      })
    );

  }

  NuevoUsuario(usuario: Jugador) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${ this.url }signUp?key=${ this.apikey }`,
    authData
    ).pipe(
      map( resp => {
        this.GuardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  ObtenerToken()
  {
    firebase.auth().currentUser.getIdToken().then(
      token => {
       return  this.userToken = token;      
      }) 

  }

  private GuardarToken(idToken: string) {

    const hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString());
  }

 LeerToken() {
    if (localStorage.getItem('token')) {
      this.userToken =  localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

estaAutenticado(): boolean {

  if ( localStorage.getItem('token') == null ) {
    this.route.navigate(['/Login']);
  }

  if (this.userToken.length < 2) {
    return false;
  }

  const expira = Number(localStorage.getItem('expira'));
  const expiraDate = new Date();
  expiraDate.setTime(expira);

  if (expiraDate > new Date()) {
    return true;
    } else {
      return false;
    }
}
}
