import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';

import {Subscription} from 'rxjs';
import { Router } from '@angular/router';
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
   constructor(private router: Router) {
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
    this.contadorJuego =+ 1; 
    console.log('Tu respuesta: ' + this.respuesta);

    if (this.nuevoJuego.realizarCuenta() == this.respuesta) {

      this.enviarJuego.emit(new JuegoAgilidad('', true, localStorage.getItem('email').split('@')[0]));
      this.mensajeResultado = 'GANASTE';
      // this.LimpiarFormulario();

    }
    // if (this.nuevoJuego.realizarCuenta() == this.respuesta) {

    //   // const idJugador = localStorage.getItem('iDjugadorLogueado');
    //    const idJugador = 5;
    //   console.log('id' + idJugador);
    //   this.enviarJuego.emit(this.nuevoJuego);
    //   // const respuesta = this.MiServicioGame.httpGet_Game('ActualizarPuntaje', 'jugador=' + idJugador + '&juego=AgilidadaMasListado&puntaje=1');

    //   this.mensajeResultado = 'Ganaste';
    // }
    else {

      if (this.contadorJuego = 6) {
        this.mensajeResultado = 'PERDISTE';
        this.contadorJuego = 0;
        this.enviarJuego.emit(new JuegoAgilidad('', false, localStorage.getItem('email').split('@')[0]));
        this.router.navigate(['/Juegos'])
        
      } else { 
        this.mensajeResultado = '¿Malo para las cuentas?' + 'Te quedan ' + (6 - this.contadorJuego) + ' intentos';
      }

    }

    document.getElementById('id02').style.display = 'block';

    this.ocultarVerificar = true;
    clearInterval(this.repetidor);
    this.respuesta = null;

  }

}
