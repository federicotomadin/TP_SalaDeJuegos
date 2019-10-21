import { Component, OnInit } from '@angular/core';

import { JugadoresService } from '../../servicios/jugadores.service';
import { Jugador } from '../../clases/jugador';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado: any;
  miJugadoresServicio: JugadoresService;
  jugadores: Jugador[] = [];

    constructor(private serviceJugadores: JugadoresService) {
      this.miJugadoresServicio = serviceJugadores;

    }


  ngOnInit() {
    this.serviceJugadores.GetJugadores()
    .subscribe( resp =>  this.jugadores = resp );
  }


  // TraerTodos(){
  //   // alert("totos");
  //   this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(data => {
  //     // console.info("jugadores listado",(data));
  //     this.listado = data;

  //   });
  // }
  // TraerGanadores(){
  //   this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(data => {
  //     // console.info("jugadores listado",(data));
  //     this.listado = data;

  //   });
  // }
  // TraerPerdedores(){
  //   this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(data => {
  //     // console.info("jugadores listado",(data));
  //     this.listado = data;

  //   });
  // }

}
