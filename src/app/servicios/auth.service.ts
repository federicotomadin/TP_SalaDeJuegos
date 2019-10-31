import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Jugador } from '../clases/jugador';


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

    const authData = {
      ...usuario,
      returnSecureToken: true };

    return this.http.post(`${ this.url }signInWithPassword?key=${ this.apikey }`, authData
    ).pipe(
      map( resp => {
        // CargarEmail(resp['idToken']);
        this.GuardarToken(resp['idToken']);
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

  private GuardarToken(idToken: string) {

    this.userToken = idToken;
    localStorage.setItem('token', this.userToken);

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
