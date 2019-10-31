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

AtualizarPuntaje(usuario: Jugador) {

   this.http.post(`${ this.url }lookup?key=${ this.apikey }`, usuario
  ).pipe(
    map( resp => {
      this.idUsuario = resp['id'];
    })
  );

  this.http.put(`${this.url}/jugadores/${this.idUsuario}.json`, usuario);
}

public subirArchivo(file): Observable<string> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('fileName', file.name);
  this.headers = new HttpHeaders({
   'Content-Type': 'application/json',
   'token': localStorage.getItem('token')
  });
  return this.http.post(this.urlStorage, formData)
  .map(resp => resp.text());
}

}





