import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {BG} from './../../clases/boton-grilla';
import {ProcesaGrilla} from './../../clases/procesa-grilla';
import { Router } from '@angular/router';
import { JugadoresService } from '../../servicios/jugadores.service';


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
  crucigrama = 1;
  palabrasEncontradas: number;

  J10= new BG('J10', 'K'); J11= new BG('J11', 'M'); J12= new BG('J12', 'M'); J13= new BG('J13', 'N'); J14= new BG('J14', 'D'); J15= new BG('J15', 'A'); J16= new BG('J16', 'X'); J17= new BG('J17', 'X'); J18= new BG('J18', 'X'); J19= new BG('J19', 'X');
  K10= new BG('K10', 'B'); K11= new BG('K11', 'C'); K12= new BG('K12', 'A'); K13= new BG('K13', 'S'); K14= new BG('K14', 'A'); K15= new BG('K15', 'N'); K16= new BG('K16', 'X'); K17= new BG('K17', 'X'); K18= new BG('K18', 'X'); K19= new BG('K19', 'N');
  L10= new BG('L10', 'X'); L11= new BG('L11', 'O'); L12= new BG('L12', 'D'); L13= new BG('L13', 'S'); L14= new BG('L14', 'A'); L15= new BG('L15', 'I'); L16= new BG('L16', 'X'); L17= new BG('L17', 'X'); L18= new BG('L18', 'X'); L19= new BG('L19', 'A');
  M10= new BG('M10', 'X'); M11= new BG('M11', 'R'); M12= new BG('M12', 'R'); M13= new BG('M13', 'S'); M14= new BG('M14', 'A'); M15= new BG('M15', 'L'); M16= new BG('M16', 'X'); M17= new BG('M17', 'X'); M18= new BG('M18', 'X'); M19= new BG('M19', 'P');
  N10= new BG('N10', 'R'); N11= new BG('N11', 'C'); N12= new BG('N12', 'I'); N13= new BG('N13', 'O'); N14= new BG('N14', 'U'); N15= new BG('N15', 'R'); N16= new BG('N16', 'X'); N17= new BG('N17', 'X'); N18= new BG('N18', 'X'); N19= new BG('N19', 'O');
  P10= new BG('P10', 'X'); P11= new BG('P11', 'O'); P12= new BG('P12', 'D'); P13= new BG('P13', 'M'); P14= new BG('P14', 'L'); P15= new BG('P15', 'E'); P16= new BG('P16', 'X'); P17= new BG('P17', 'X'); P18= new BG('P18', 'X'); P19= new BG('P19', 'M');
  Q10= new BG('Q10', 'X'); Q11= new BG('Q11', 'C'); Q12= new BG('Q12', 'M'); Q13= new BG('Q13', 'S'); Q14= new BG('Q14', 'A'); Q15= new BG('Q15', 'A'); Q16= new BG('Q16', 'X'); Q17= new BG('Q17', 'X'); Q18= new BG('Q18', 'X'); Q19= new BG('Q19', 'L');
  R10= new BG('R10', 'R'); R11= new BG('R11', 'K'); R12= new BG('R12', 'L'); R13= new BG('R13', 'A'); R14= new BG('R14', 'X'); R15= new BG('R15', 'R'); R16= new BG('R16', 'X'); R17= new BG('R17', 'X'); R18= new BG('R18', 'X'); R19= new BG('R19', 'E');
  S10= new BG('S10', 'P'); S11= new BG('S11', 'Q'); S12= new BG('S12', 'U'); S13= new BG('S13', 'I'); S14= new BG('S14', 'T'); S15= new BG('S15', 'O'); S16= new BG('S16', 'X'); S17= new BG('S17', 'X'); S18= new BG('S18', 'X'); S19= new BG('S19', 'B');

  linea18 = [this.J10, this.J11, this.J12, this.J13, this.J14, this.J15, this.J16, this.J17, this.J18, this.J19];
  linea19 = [this.K10, this.K11, this.K12, this.K13, this.K14, this.K15, this.K16, this.K17, this.K18, this.K19];
  linea20 = [this.L10, this.L11, this.L12, this.L13, this.L14, this.L15, this.L16, this.L17, this.L18, this.L19];
  linea21 = [this.M10, this.M11, this.M12, this.M13, this.M14, this.M15, this.M16, this.M17, this.M18, this.M19];
  linea22 = [this.N10, this.N11, this.N12, this.N13, this.N14, this.N15, this.N16, this.N17, this.N18, this.N19];
  linea23 = [this.P10, this.P11, this.P12, this.P13, this.P14, this.P15, this.P16, this.P17, this.P18, this.P19];
  linea24 = [this.Q10, this.Q11, this.Q12, this.Q13, this.Q14, this.Q15, this.Q16, this.Q17, this.Q18, this.Q19];
  linea25 = [this.R10, this.R11, this.R12, this.R13, this.R14, this.R15, this.R16, this.R17, this.R18, this.R19];
  linea26 = [this.S10, this.S11, this.S12, this.S13, this.S14, this.S15, this.S16, this.S17, this.S18, this.S19];

  matrizPrincipal3 = [this.linea18, this.linea19, this.linea20, this.linea21, this.linea22, this.linea23, this.linea24, this.linea25, this.linea26];

  respuesta11A = [this.N10, this.P11, this.Q12, this.R13];
  respuesta21B = [this.S11, this.S12, this.S13, this.S14, this.S15];
  respuesta31C = [this.J12, this.K12, this.L12, this.M12, this.N12, this.P12];

  matrizRespuestas3 = [this.respuesta11A, this.respuesta21B, this.respuesta31C];

  J0= new BG('J0', 'L'); J1= new BG('J1', 'U'); J2= new BG('J2', 'A'); J3= new BG('J3', 'N'); J4= new BG('J4', 'D'); J5= new BG('J5', 'A'); J6= new BG('J6', 'X'); J7= new BG('J7', 'X'); J8= new BG('J8', 'X'); J9= new BG('J9', 'X');
  K0= new BG('K0', 'B'); K1= new BG('K1', 'C'); K2= new BG('K2', 'A'); K3= new BG('K3', 'S'); K4= new BG('K4', 'A'); K5= new BG('K5', 'N'); K6= new BG('K6', 'X'); K7= new BG('K7', 'X'); K8= new BG('K8', 'X'); K9= new BG('K9', 'N');
  L0= new BG('L0', 'X'); L1= new BG('L1', 'O'); L2= new BG('L2', 'A'); L3= new BG('L3', 'S'); L4= new BG('L4', 'A'); L5= new BG('L5', 'I'); L6= new BG('L6', 'X'); L7= new BG('L7', 'X'); L8= new BG('L8', 'X'); L9= new BG('L9', 'A');
  M0= new BG('M0', 'X'); M1= new BG('M1', 'C'); M2= new BG('M2', 'G'); M3= new BG('M3', 'S'); M4= new BG('M4', 'A'); M5= new BG('M5', 'L'); M6= new BG('M6', 'X'); M7= new BG('M7', 'X'); M8= new BG('M8', 'X'); M9= new BG('M9', 'P');
  N0= new BG('N0', 'X'); N1= new BG('N1', 'C'); N2= new BG('N2', 'A'); N3= new BG('N3', 'O'); N4= new BG('N4', 'U'); N5= new BG('N5', 'R'); N6= new BG('N6', 'X'); N7= new BG('N7', 'X'); N8= new BG('N8', 'X'); N9= new BG('N9', 'O');
  P0= new BG('P0', 'X'); P1= new BG('P1', 'S'); P2= new BG('P2', 'E'); P3= new BG('P3', 'U'); P4= new BG('P4', 'T'); P5= new BG('P5', 'E'); P6= new BG('P6', 'X'); P7= new BG('P7', 'X'); P8= new BG('P8', 'X'); P9= new BG('P9', 'M');
  Q0= new BG('Q0', 'X'); Q1= new BG('Q1', 'C'); Q2= new BG('Q2', 'A'); Q3= new BG('Q3', 'S'); Q4= new BG('Q4', 'A'); Q5= new BG('Q5', 'A'); Q6= new BG('Q6', 'X'); Q7= new BG('Q7', 'X'); Q8= new BG('Q8', 'X'); Q9= new BG('Q9', 'L');
  R0= new BG('R0', 'R'); R1= new BG('R1', 'k'); R2= new BG('R2', 'L'); R3= new BG('R3', 'A'); R4= new BG('R4', 'X'); R5= new BG('R5', 'R'); R6= new BG('R6', 'X'); R7= new BG('R7', 'X'); R8= new BG('R8', 'X'); R9= new BG('R9', 'E');
  S0= new BG('S0', 'P'); S1= new BG('S1', 'S'); S2= new BG('S2', 'E'); S3= new BG('S3', 'U'); S4= new BG('S4', 'L'); S5= new BG('S5', 'Z'); S6= new BG('S6', 'X'); S7= new BG('S7', 'X'); S8= new BG('S8', 'X'); S9= new BG('S9', 'B');

  linea9 = [this.J0, this.J1, this.J2, this.J3, this.J4, this.J5, this.J6, this.J7, this.J8, this.J9];
  linea10 = [this.K0, this.K1, this.K2, this.K3, this.K4, this.K5, this.K6, this.K7, this.K8, this.K9];
  linea11 = [this.L0, this.L1, this.L2, this.L3, this.L4, this.L5, this.L6, this.L7, this.L8, this.L9];
  linea12 = [this.M0, this.M1, this.M2, this.M3, this.M4, this.M5, this.M6, this.M7, this.M8, this.M9];
  linea13 = [this.N0, this.N1, this.N2, this.N3, this.N4, this.N5, this.N6, this.N7, this.N8, this.N9];
  linea14 = [this.P0, this.P1, this.P2, this.P3, this.P4, this.P5, this.P6, this.P7, this.P8, this.P9];
  linea15 = [this.Q0, this.Q1, this.Q2, this.Q3, this.Q4, this.Q5, this.Q6, this.Q7, this.Q8, this.Q9];
  linea16 = [this.R0, this.R1, this.R2, this.R3, this.R4, this.R5, this.R6, this.R7, this.R8, this.R9];
  linea17 = [this.S0, this.S1, this.S2, this.S3, this.S4, this.S5, this.S6, this.S7, this.S8, this.S9];

  matrizPrincipal2 = [this.linea9, this.linea10, this.linea11, this.linea12, this.linea13, this.linea14, this.linea15, this.linea16, this.linea17];

  respuesta1A = [this.K0, this.L1, this.M2, this.N3, this.P4, this.Q5];
  respuesta2B = [this.S1, this.S2, this.S3, this.S4];
  respuesta3C = [this.J0, this.J1, this.J2, this.J3, this.J4, this.J5];

  matrizRespuestas2 = [this.respuesta1A, this.respuesta2B, this.respuesta3C];


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
  respuesta5 = [this.A0, this.A1, this.A2, this.A3, this.A4, this.A5];

  matrizRespuestas = [this.respuesta1, this.respuesta2, this.respuesta5];


  name = '';

  crearDetalleModal: boolean;


  constructor(private modalService: NgbModal, private router: Router, private servicioJugadores: JugadoresService) {
   }

  clasesBotones = {'btnPresionado': false, 'btnNormal': true};

  ngOnInit() {

    const cruci = localStorage.getItem('crucigrama')

    if (cruci == undefined) {
      localStorage.setItem('crucigrama', '1');
    }
    if (cruci == '1') {
      localStorage.setItem('crucigrama', '1');
    }
    if (cruci == '2') {
      localStorage.setItem('crucigrama', '2');
    }
    if (cruci == '3') {
      localStorage.setItem('crucigrama', '3');
    }


    this.crucigrama = parseInt(localStorage.getItem('crucigrama'), 10);

  }

  evaluar() {
      const esGanador = false;
      this.procesa = new ProcesaGrilla();

       // chequeo que juego cargar
      if (this.crucigrama == 1) {
        this.palabrasEncontradas = this.procesa.evaluaRespuesta(this.matrizPrincipal, this.matrizRespuestas);
      }
      if (this.crucigrama == 2) {
        this.palabrasEncontradas = this.procesa.evaluaRespuesta(this.matrizPrincipal2, this.matrizRespuestas2);
      }
      if (this.crucigrama == 3) {
        this.palabrasEncontradas = this.procesa.evaluaRespuesta(this.matrizPrincipal3, this.matrizRespuestas3);
      }
      console.log('Palabras encontradas: ' + this.palabrasEncontradas);

      this.mensajeResultado = 'Palabras encontradas: ' + this.palabrasEncontradas;

      // verifico si ganó
      if (this.palabrasEncontradas === 3) {
        this.ganaste = true;
        document.getElementById('id05').style.display = 'block';
        this.servicioJugadores.ActualizarPuntaje('20', localStorage.getItem('email'));
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

      if (this.crucigrama == 1) {
        this.matrizPrincipal.forEach(linea => {
          linea.forEach(element => {
            if (pId === element.id) {
              element.seleccionado = true;
            }
          });
        });
      }

      if (this.crucigrama == 2) {
        this.matrizPrincipal2.forEach(linea => {
          linea.forEach(element => {
            if (pId === element.id) {
              element.seleccionado = true;
            }
          });
        });
      }

    if (this.crucigrama == 3) {
      this.matrizPrincipal3.forEach(linea => {
        linea.forEach(element => {
          if (pId === element.id) {
            element.seleccionado = true;
          }
        });
      });
    }
  }


abrirDetalleModal() {
  this.crearDetalleModal = true;
}

cerrarDetalleModal() {
  this.crearDetalleModal = false;
}

juegoDeCero() {

  if (this.crucigrama == 1) {
    localStorage.setItem('crucigrama', '2');
  }
  if (this.crucigrama == 2) {
    localStorage.setItem('crucigrama', '3');
  }
  if (this.crucigrama == 3) {
    localStorage.setItem('crucigrama', '1');
  }

  document.getElementById('id05').style.display = 'none';
  this.ganaste = true;
  this.router.navigate(['/Juegos']);

}

}
