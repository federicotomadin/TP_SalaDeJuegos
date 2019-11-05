import { Injectable } from '@angular/core';
// import { ArchivosJugadoresService} from './archivos-jugadores.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Jugador } from '../clases/jugador';
import { map } from 'rxjs/operators';
import { Cliente } from '../clases/cliente';
import { AuthService } from './auth.service';
import { Observable, timer } from 'rxjs';
import { RequestOptions } from '@angular/http';
import Swal from 'sweetalert2';


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

ActualizarPuntaje(puntaje: string, email: string) {

  var usuario: Jugador;
  var  puntajeNuevo: number;
 return  this.http.get(`${this.url}/jugadores.json`)
  .subscribe(resp => {
    Object.keys (resp).forEach(key => {
        const jugador: Jugador = resp[key];

        if(jugador['email'] == email) {
   
          puntajeNuevo = parseInt(puntaje) + parseInt(jugador.puntaje);

          usuario = new Jugador(jugador.email,jugador.nombre, jugador.apellido, jugador.password, String(puntajeNuevo));

          this.http.put(`${this.url}/jugadores/${key}.json`, usuario)
          .subscribe(resp => 
            console.log(resp));

          Swal.fire(
            'Actualizado',
            'Puntaje actualizado con éxito',
            'success'
          )
          }
    })

  });

   
}

ObtenerJugadorActual() {
  return this.http.get(`${this.url}/jugadores.json`);
}

}





