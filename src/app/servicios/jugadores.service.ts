import { Injectable } from '@angular/core';
import { ArchivosJugadoresService} from './archivos-jugadores.service';
import { HttpClient } from '@angular/common/http';

import { Jugador } from '../clases/jugador';
import { map } from 'rxjs/operators';



@Injectable()
export class JugadoresService {


  constructor( public miHttp: ArchivosJugadoresService, private http: HttpClient ) { }

  private url = 'https://sala-de-juegos-179b8.firebaseio.com';
  filtrado: any;

CrearJugador(jugador: Jugador) {
 return  this.http.post(`${this.url}/jugadores.json`, jugador);
}

GetJugadores() {
  return this.http.get(`${this.url}/jugadores.json`)
  .pipe(
    map( this.crearArreglo)

  );
}

private crearArreglo( jugadoresObj: Object) {
  const jugadores: Jugador[] = [];
  console.log(jugadores);

  if (jugadoresObj === null ) {
    return [];
  }

  Object.keys ( jugadoresObj ).forEach( key => {
    const jugador: Jugador = jugadoresObj[key];
    jugador.id = key;

    jugadores.push(jugador);
  });

}



  traertodos(ruta: string, filtro: string)
  {
    return this.miHttp.traerJugadores(ruta).then(data => {
      console.info('jugadores service', data);

      this.filtrado = data;

     let  ganador: boolean;
      if (filtro === 'ganadores')
      {
        ganador = true;
      } else {
        ganador = false;
      }

      this.filtrado = this.filtrado.filter(
        data => data.gano === ganador  || filtro === 'todos' ); return this.filtrado; }
      )
      .catch(errror => {console.log('error');

    return this.filtrado;


    });
  }

}
