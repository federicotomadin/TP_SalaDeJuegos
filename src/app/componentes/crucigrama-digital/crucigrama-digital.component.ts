import { Component, OnInit } from '@angular/core';
import {BG} from './../../clases/boton-grilla';
import {ProcesaGrilla} from './../../clases/procesa-grilla';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { ModalDirective } from 'ngx-bootstrap/modal';

// ngx-bootstrap/modal';

@Component({
  selector: 'app-crucigrama-digital',
  templateUrl: './crucigrama-digital.component.html',
  styleUrls: ['./crucigrama-digital.component.css']
})


export class CrucigramaDigitalComponent implements OnInit {

  Titulo = 'Sopa de letras';
  Subtitulo = 'Encontrá 5 capitales del mundo';
  ganaste: boolean;
  procesa: ProcesaGrilla;
  mensajeResultado = '';


  A0= new BG('A0', 'A'); A1= new BG('A1', 'N'); A2= new BG('A2', 'A'); A3= new BG('A3', 'R'); A4= new BG('A4', 'I'); A5= new BG('A5', 'T'); A6= new BG('A6', 'X'); A7= new BG('A7', 'X'); A8= new BG('A8', 'X'); A9= new BG('A9', 'X');
  B0= new BG('B0', 'X'); B1= new BG('B1', 'C'); B2= new BG('B2', 'A'); B3= new BG('B3', 'S'); B4= new BG('B4', 'A'); B5= new BG('B5', 'N'); B6= new BG('B6', 'X'); B7= new BG('B7', 'X'); B8= new BG('B8', 'X'); B9= new BG('B9', 'N');
  C0= new BG('C0', 'X'); C1= new BG('C1', 'C'); C2= new BG('C2', 'A'); C3= new BG('C3', 'S'); C4= new BG('C4', 'A'); C5= new BG('C5', 'I'); C6= new BG('C6', 'X'); C7= new BG('C7', 'X'); C8= new BG('C8', 'X'); C9= new BG('C9', 'A');
  D0= new BG('D0', 'X'); D1= new BG('D1', 'C'); D2= new BG('D2', 'A'); D3= new BG('D3', 'S'); D4= new BG('D4', 'A'); D5= new BG('D5', 'L'); D6= new BG('D6', 'X'); D7= new BG('D7', 'X'); D8= new BG('D8', 'X'); D9= new BG('D9', 'P');
  E0= new BG('E0', 'X'); E1= new BG('E1', 'C'); E2= new BG('E2', 'A'); E3= new BG('E3', 'S'); E4= new BG('E4', 'U'); E5= new BG('E5', 'R'); E6= new BG('E6', 'X'); E7= new BG('E7', 'X'); E8= new BG('E8', 'X'); E9= new BG('E9', 'O');
  F0= new BG('F0', 'X'); F1= new BG('F1', 'C'); F2= new BG('F2', 'A'); F3= new BG('F3', 'B'); F4= new BG('F4', 'A'); F5= new BG('F5', 'E'); F6= new BG('F6', 'X'); F7= new BG('F7', 'X'); F8= new BG('F8', 'X'); F9= new BG('F9', 'M');
  G0= new BG('G0', 'X'); G1= new BG('G1', 'C'); G2= new BG('G2', 'A'); G3= new BG('G3', 'S'); G4= new BG('G4', 'A'); G5= new BG('G5', 'B'); G6= new BG('G6', 'X'); G7= new BG('G7', 'X'); G8= new BG('G8', 'X'); G9= new BG('G9', 'L');
  H0= new BG('H0', 'H'); H1= new BG('H1', 'k'); H2= new BG('H2', 'L'); H3= new BG('H3', 'A'); H4= new BG('H4', 'X'); H5= new BG('H5', 'R'); H6= new BG('H6', 'X'); H7= new BG('H7', 'X'); H8= new BG('H8', 'X'); H9= new BG('H9', 'E');
  I0= new BG('I0', 'P'); I1= new BG('I1', 'E'); I2= new BG('I2', 'K'); I3= new BG('I3', 'I'); I4= new BG('I4', 'N'); I5= new BG('I5', 'Z'); I6= new BG('I6', 'X'); I7= new BG('I7', 'X'); I8= new BG('I8', 'X'); I9= new BG('I9', 'B');


  linea0 = [this.A0, this.A1, this.A2, this.A3, this.A4, this.A5, this.A6, this.A7, this.A8, this.A9];
  linea1 = [this.B0, this.B1, this.B2, this.B3, this.B4, this.B5, this.B6, this.B7, this.B8, this.B9];
  linea2 = [this.C0, this.C1, this.C2, this.C3, this.C4, this.C5, this.C6, this.C7, this.C8, this.C9];
  linea3 = [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9];
  linea4 = [this.E0, this.E1, this.E2, this.E3, this.E4, this.E5, this.E6, this.E7, this.E8, this.E9];
  linea5 = [this.F0, this.F1, this.F2, this.F3, this.F4, this.F5, this.F6, this.F7, this.F8, this.F9];
  linea6 = [this.G0, this.G1, this.G2, this.G3, this.G4, this.G5, this.G6, this.G7, this.G8, this.G9];
  linea7 = [this.H0, this.H1, this.H2, this.H3, this.H4, this.H5, this.H6, this.H7, this.H8, this.H9];
  linea8 = [this.I0, this.I1, this.I2, this.I3, this.I4, this.I5, this.I6, this.I7, this.I8, this.I9];

  matrizPrincipal = [this.linea0, this.linea1, this.linea2, this.linea3, this.linea4, this.linea5, this.linea6, this.linea7, this.linea8];


  respuesta1 = [this.I0, this.I1, this.I2, this.I3, this.I4];
  respuesta2 = [this.H1, this.G2, this.F3, this.E4, this.D5];
  respuesta3 = [this.I9, this.H9, this.G9, this.F9, this.E9, this.D9, this.C9, this.B9];
  respuesta4 = [this.B5, this.C5, this.D5, this.E5, this.F5, this.G5];
  respuesta5 = [this.A0, this.A1, this.A2, this.A3, this.A4, this.A5];

  matrizRespuestas = [this.respuesta1, this.respuesta2, this.respuesta3, this.respuesta4, this.respuesta5];


  name = '';

  crearDetalleModal: boolean;


  constructor(private modalService: NgbModal, private router: Router) {


   }

  clasesBotones = {'btnPresionado': false, 'btnNormal': true};

  ngOnInit() {

    console.log('ngOnInit');

  }

  evaluar() {
      const esGanador = false;
      this.procesa = new ProcesaGrilla();
      const palabrasEncontradas = this.procesa.evaluaRespuesta(this.matrizPrincipal, this.matrizRespuestas);
      console.log('Palabras encontradas: ' + palabrasEncontradas);

      this.mensajeResultado = 'Palabras encontradas: ' + palabrasEncontradas;

      if (palabrasEncontradas === 5) {
        // this.palabrasEncontradas = 0;
        this.ganaste = true;
        console.log('algo');
        document.getElementById('id05').style.display = 'block';
      } else {
      document.getElementById('id04').style.display = 'block';
      }
  }


  verificar(boton) {

      this.cambiarEstado(boton.toElement.id);

        if (boton.toElement.className === 'btnPresionado') {
            boton.toElement.className = 'btnNormal';
        } else {
            boton.toElement.className = 'btnPresionado';
        }
    }

    cambiarEstado(pId) {

      this.matrizPrincipal.forEach(linea => {
        linea.forEach(element => {

          if (pId === element.id) {
            element.seleccionado = true;
          }

        });

      });
    }


abrirDetalleModal() {
  this.crearDetalleModal = true;
}

cerrarDetalleModal() {
  this.crearDetalleModal = false;
}

juegoDeCero() {

  document.getElementById('id05').style.display = 'none';
  this.ganaste = true;
  this.router.navigate(['/Principal']);

}

}
