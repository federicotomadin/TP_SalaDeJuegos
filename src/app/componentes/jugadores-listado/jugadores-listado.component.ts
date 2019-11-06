import { Component, OnInit, Output, Input } from '@angular/core';

import { JugadoresService } from '../../servicios/jugadores.service';
import { Jugador } from '../../clases/jugador';
import { Cliente } from '../../clases/cliente';
import { ClienteService } from '../../servicios/cliente.service';
import { auto } from '../../clases/auto';
import { FirebaseStorageService } from '../../servicios/firebase-storage.service';
import { AngularFireStorage } from '@angular/fire/storage';
import Swal from 'sweetalert2';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';



@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado: any;
  miJugadoresServicio: JugadoresService;
  jugadores: Jugador[] = [];
  @Output()
  jugador: Jugador;

    constructor(private serviceFireStorage: FirebaseStorageService, private serviceJugadores: JugadoresService,
      private serviceCliente: ClienteService, private storage: AngularFireStorage) {
      this.miJugadoresServicio = serviceJugadores;

    }

    cliente = new Cliente('Federico', '1234');

    auto = new auto();
    urlPublica: string;
    upload: any;

    selectedFile: File = null;


    public onFileSelectd($event) {

      if ($event.target.files.length === 1) {
        this.serviceFireStorage.referenciaCloudStorage($event.target.files[0].name).getDownloadURL()
         .subscribe(resp  => {
           this.urlPublica = resp;

         Swal.fire({
            allowOutsideClick: false,
            type: 'info',
            text: 'Imagen cargada con exito'
  });
        }, (error) => {
          console.error(error);
        });

         this.serviceFireStorage.tareaCloudStorage($event.target.files[0].name, $event.target.files[0]);


      //   this.serviceJugadores.subirArchivo($event.target.files[0]).subscribe(response => {
      //         console.log(response);
      //     },
      //     error => {
      //         console.error(error);
      //     });
      // }
  }

}

    // onUpload($event) {

    //   this.serviceJugadores.subirArchivo($event.target.files[0])
    //   .subscribe(response => {
    //     console.log(response);
    // });
    // }

  CrearJugadores() {
    this.serviceCliente.crearCliente(this.cliente);
  }

  LoguearJugador() {

    this.serviceCliente.loguearCliente(this.cliente);

  }

  IngresarAuto() {

    this.serviceCliente.CargarAuto(this.auto)

  }


  ngOnInit() {
    this.ActualizarJugador();
  }

private crearArreglo( jugadoresObj: Object) {
  // console.log(jugadores);
  if (jugadoresObj === null ) {
    return [];
  }

  Object.keys ( jugadoresObj ).forEach( key => {
    const jugador: Jugador = jugadoresObj[key];
    // jugador.id = key;

    this.jugadores.push(jugador);
  });
}

ActualizarJugador() {

  // this.serviceJugadores.ActualizarPuntaje('20',localStorage.getItem('email'));
  this.LimpiarArreglo();
  this.serviceJugadores.GetJugadores()
  .subscribe( resp =>  {
    this.crearArreglo(resp);
  });
}

LimpiarArreglo() {
  this.jugadores.splice(0);
}

DescargarPdf() {

  var doc = new jsPDF() as jsPDFWithPlugin;

  interface jsPDFWithPlugin extends jsPDF {
    autoTable: (options: UserOptions) => jsPDF;
  }   
  var fila = 10;
  var columna = 15;

  Object.keys ( this.jugadores ).forEach( key => {
    const jugador: Jugador = this.jugadores[key];

    doc.text(JSON.stringify(jugador), fila, columna);
    columna += 15;

    doc.autoTable({
      head: [['Apellido', 'Email', 'Nombre', 'Puntaje']],
      body: [[jugador.apellido, jugador.email, jugador.nombre, jugador.puntaje]]
    })
  });

  doc.save('jugadores.pdf');
  
 
   
}

}
