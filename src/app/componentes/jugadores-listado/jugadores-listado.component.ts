import { Component, OnInit, Output, Input } from '@angular/core';

import { JugadoresService } from '../../servicios/jugadores.service';
import { Jugador } from '../../clases/jugador';
import { Cliente } from '../../clases/cliente';
import { ClienteService } from '../../servicios/cliente.service';
import { auto } from '../../clases/auto';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado: any;
  miJugadoresServicio: JugadoresService;
  @Output()
  jugadores: Jugador[] = [];
  jugador: Jugador;

    constructor(private serviceJugadores: JugadoresService, private serviceCliente: ClienteService) {
      this.miJugadoresServicio = serviceJugadores;

    }

    cliente = new Cliente('Federico', '1234');
    auto = new auto();

    selectedFile: File = null;
    onFileSelected(event) {
      this.selectedFile = <File>event.target.files[0];
    }

    onUpload() {

      this.serviceCliente.CargarArchivo(this.selectedFile);

    }

  CrearJugadores() {
    this.serviceCliente.crearCliente(this.cliente);
  }

  LoguearJugador() {

    this.serviceCliente.loguearCliente(this.cliente)

  }

  IngresarAuto() {

    this.serviceCliente.CargarAuto(this.auto)

  }


  ngOnInit() {
     this.serviceJugadores.GetJugadores()
    .subscribe( resp =>  {
      console.log(resp);
      this.crearArreglo(resp);
    } );
  }

private crearArreglo( jugadoresObj: Object) {
  // console.log(jugadores);
  if (jugadoresObj === null ) {
    return [];
  }

  Object.keys ( jugadoresObj ).forEach( key => {
    const jugador: Jugador = jugadoresObj[key];
    jugador.id = key;

    this.jugadores.push(jugador);
  });

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
