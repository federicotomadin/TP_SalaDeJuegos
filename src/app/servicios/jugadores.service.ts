import { Injectable } from '@angular/core';
// import { ArchivosJugadoresService} from './archivos-jugadores.service';
import { HttpClient } from '@angular/common/http';

import { Jugador } from '../clases/jugador';
import { map } from 'rxjs/operators';
import { Cliente } from '../clases/cliente';
import { AuthService } from './auth.service';




@Injectable()
export class JugadoresService {
  constructor( private http: HttpClient, authService: AuthService ) { }

  private url = 'https://sala-de-juegos-179b8.firebaseio.com';
  private apikey = 'AIzaSyB-P7vtT3VkiurKd7M2mityjSj6QrxO1xs';
  filtrado: any;
  emailUsuario: string;
  idUsuario: string;


CrearJugador(jugador: Jugador) {
 return  this.http.post(`${this.url}/jugadores.json`, jugador);
}

GetJugadores() {
   return this.http.get(`${this.url}/jugadores.json`);
}

AtualizarPuntaje(usuario: Jugador) {

   this.http.post(`${ this.url }lookup?key=${ this.apikey }`, usuario
  ).pipe(
    map( resp => {
      this.idUsuario = resp['id'];
    })
  );

  this.http.put(`${this.url}/jugadores/${this.idUsuario}.json`, usuario);
}


}

  // traertodos(ruta: string, filtro: string) {
  //   return this.miHttp.traerJugadores(ruta).then(data => {
  //     console.info('jugadores service', data);

  //     this.filtrado = data;

  //    let  ganador: boolean;
  //     if (filtro === 'ganadores')
  //     {
  //       ganador = true;
  //     } else {
  //       ganador = false;
  //     }

  //     this.filtrado = this.filtrado.filter(
  //       data => data.gano === ganador  || filtro === 'todos' ); return this.filtrado; }
  //     )
  //     .catch(errror => {console.log('error');

  //   return this.filtrado;


  //   });
  // }


