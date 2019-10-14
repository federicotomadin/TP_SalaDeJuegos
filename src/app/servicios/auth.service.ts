import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../clases/jugador';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginComponent } from '../componentes/login/login.component';



// @Pipe({name: 'name'})
// export class NamePipe implements PipeTransform {
//   transform(value: any): any {
//   }

@Injectable()

export class AuthService {

  userToken: string;

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:'
  private apikey = 'AIzaSyB-P7vtT3VkiurKd7M2mityjSj6QrxO1xs';


  //Crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]



  constructor(private http: HttpClient) { }

  Logout() {}

  Login(usuario: Jugador) {

    const authData = {
      ...usuario, 
      returnSecureToken: true
    }

    return this.http.post(`${ this.url }signInWithPassword?key=${ this.apikey }`, 
    authData
    ).pipe(
      map( resp => {
        console.log('Entro al map de RXJS');
        this.GuardarToken(resp['idToken']);
        return resp;
      })
    )

  }

  NuevoUsuario(usuario: Jugador) {

    const authData = {
      ...usuario, 
      returnSecureToken: true
    }

    return this.http.post(`${ this.url }/accounts:signUp?key=${ this.apikey }`, 
    authData
    ).pipe(
      map( resp => {
        console.log('Entro al map de RXJS');
        this.GuardarToken(resp['idToken']);
        return resp;
      })
    )

    
  }

  private GuardarToken(idToken: string) {

    this.userToken = idToken;
    localStorage.setItem('token', this.userToken);



  }

 LeerToken()
  {
    if (localStorage.getItem('token')) {
      this.userToken =  localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;

  }

}
