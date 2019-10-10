import { log } from 'util';
import { Injectable } from '@angular/core';
import { MiHttpService } from '../servicios/mi-http/mi-http.service';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Jugador } from '../clases/jugador';


@Injectable({
  providedIn: 'root'
})
export class ServicioGenericoService {

  url = 'http://darodarioli.tech/API/loginWEB/';
  urlLocal = 'http://localhost:8080/Resto/API/log/';

  constructor(public http1: Http, private http: HttpClient) { }


public RegistrarUsuario(parametros: string) {

  return this.http.get(this. urlLocal + parametros).toPromise();
}


public TraerUsuario(parametros: string) {


  return this.http.get(this. urlLocal + parametros).toPromise();
}


public TraeListado(parametros: string) {

  console.log('En generico');
  console.log(this. urlLocal + parametros);
  return this.http.get(this. urlLocal + parametros).toPromise();
}

public ActualizarPuntajeJugador(parametros: string) {

  // http://localhost:8080/Resto/API/log/puntos/actualizar?jugador=1&juego=PPT&puntaje=2

  const camino = 'puntos/actualizar?';

  return this.http.get(this. urlLocal + camino + parametros).toPromise();
}

public TraerPuntajes() {

  // http://localhost:8080/Resto/API/log/puntos/actualizar?jugador=1&juego=PPT&puntaje=2

  const camino = 'puntaje';

  return this.http.get(this. urlLocal + camino).toPromise();
}

// =====================================


  public httpGet_Generico(tarea: string, parametro: string)
  {
    return this.http1
    .get( this.url + tarea + '?' + parametro)
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpGet_Listado(tarea: string)
  {
    return this.http1
    .get(this.urlLocal + tarea)
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpGet_Observable ( parametro: string): Observable<Jugador>
  {
    console.log( this.urlLocal + parametro );

    return this.http.get( this.urlLocal + parametro )
      .map( ( res: Response ) => res.json())
      .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}
