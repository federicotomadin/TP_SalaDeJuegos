import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


import { Jugador } from '../clases/jugador';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';



@Injectable()

export class AuthService {

  userToken: string;


  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyB-P7vtT3VkiurKd7M2mityjSj6QrxO1xs';

  constructor(private http: HttpClient, private route: Router, private CabeceraComponent: CabeceraComponent) {
    this.LeerToken();
  }

  Logout() {
      localStorage.removeItem('token');

  }

  Login(usuario: Jugador) {

    const cabecera = new CabeceraComponent(this, this.route);

    const authData = {
      ...usuario,
      returnSecureToken: true };

      this.http.get(`${ this.url }signInWithPassword?key=${ this.apikey }`
      ).pipe(
        map( resp => {
          console.log(resp);
        })
      );

    return this.http.post(`${ this.url }signInWithPassword?key=${ this.apikey }`, authData
    ).pipe(
      map( resp => {
         cabecera.CargarEmail(resp['idToken']);
        this.GuardarToken(resp['idToken']);
        return resp;
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

    let hoy = new Date();
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

  if ( localStorage.getItem('token') == null) {
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
