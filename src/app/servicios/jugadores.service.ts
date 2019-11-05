import { Injectable } from '@angular/core';
// import { ArchivosJugadoresService} from './archivos-jugadores.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Jugador } from '../clases/jugador';
import { map } from 'rxjs/operators';
import { Cliente } from '../clases/cliente';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { RequestOptions } from '@angular/http';


@Injectable()
export class JugadoresService {
  constructor( private http: HttpClient, authService: AuthService ) { }

  private url = 'https://sala-de-juegos-179b8.firebaseio.com';

  private urlStorage = 'gs://sala-de-juegos-179b8.appspot.com';
  private apikey = 'AIzaSyB-P7vtT3VkiurKd7M2mityjSj6QrxO1xs';
  filtrado: any;
  emailUsuario: string;
  idUsuario: string;

token: string;
headers: HttpHeaders;

CrearJugador(jugador: Jugador) {
 return  this.http.post(`${this.url}/jugadores.json`, jugador);
}

GetJugadores() {
   return this.http.get(`${this.url}/jugadores.json`);
}

ActualizarPuntaje(usuario: Jugador) {

 return  this.http.put(`${this.url}/jugadores/${usuario.id}.json`, usuario)
 .subscribe(resp =>
  console.log(resp));
}

ObtenerJugadorActual() {
  return this.http.get(`${this.url}/jugadores.json`);
}

}





