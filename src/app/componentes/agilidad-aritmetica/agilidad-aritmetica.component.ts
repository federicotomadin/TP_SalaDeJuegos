import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';

import {Subscription} from 'rxjs';
import { Router } from '@angular/router';
import { JugadoresService } from '../../servicios/jugadores.service';
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  @Output()
  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;
  public nombreJuego = 'Agilidad Aritmética';
  private subscription: Subscription;

  public pNumero: number;
  public sNumero: number;
  public sOperador: string;
  public operadores: string[] = ['+', '-', '*', '/'];
  public respuesta: number;
  public mensajeResultado = '';
  public contadorJuego = 0;


  ngOnInit() {
  }
   constructor(private router: Router, private servicioJugador: JugadoresService) {
    this.contadorJuego = 0;
     this.ocultarVerificar = true;
     this.Tiempo = 10;
    this.nuevoJuego = new JuegoAgilidad();

  }

  LimpiarFormulario() {
    this.nuevoJuego = new JuegoAgilidad();
    this.pNumero = this.nuevoJuego.primerNumero;
    this.sNumero = this.nuevoJuego.segundoNumero;
    this.sOperador = this.operadores[this.nuevoJuego.operador];

  }

  NuevoJuego() {

    this.nuevoJuego = new JuegoAgilidad();
    this.pNumero = this.nuevoJuego.primerNumero;
    this.sNumero = this.nuevoJuego.segundoNumero;
    this.sOperador = this.operadores[this.nuevoJuego.operador];

    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {

      this.Tiempo--;
      console.log('llego', this.Tiempo);
      if (this.Tiempo === 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = 10;
      }
    }, 900);
  }


  verificar() {
    this.contadorJuego =  this.contadorJuego +  1;
    console.log('Tu respuesta: ' + this.respuesta);

    if (this.nuevoJuego.realizarCuenta() == this.respuesta) {

      this.enviarJuego.emit(new JuegoAgilidad('', true, localStorage.getItem('email').split('@')[0], 10));
      this.mensajeResultado = 'GANASTE';
      this.servicioJugador.ActualizarPuntaje('20', localStorage.getItem('email'));

    } else {

      if (this.contadorJuego == 2) {
        this.mensajeResultado = 'PERDISTE';
        this.contadorJuego = 0;
        this.enviarJuego.emit(new JuegoAgilidad('', false, localStorage.getItem('email').split('@')[0]));

      } else { 
        this.mensajeResultado = '¿Malo para las cuentas? ' + 'Te quedan ' + (2 - this.contadorJuego) + ' intentos';
      }

    }

    document.getElementById('id02').style.display = 'block';

    this.ocultarVerificar = true;
    clearInterval(this.repetidor);
    this.Tiempo = 10;
    this.respuesta = null;

  }

}
