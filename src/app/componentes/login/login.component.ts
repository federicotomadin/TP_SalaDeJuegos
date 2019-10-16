import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Jugador } from '../../clases/jugador';
import { AuthService } from '../../servicios/auth.service';
import Swal from 'sweetalert2';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recordarme = false;
  private subscription: Subscription;
  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje= 'esperando...';
  logeando= true;
  ProgresoDeAncho: string;

  unJugador: Jugador;

  clase= 'progress-bar progress-bar-info progress-bar-striped ';

  constructor(private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
      this.progreso = 0;
      this.ProgresoDeAncho = '0%';

  }

  ngOnInit() {
    this.unJugador = new Jugador();

    if (localStorage.getItem('email')) {
      this.unJugador.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  Login(form: NgForm) {

    if (form.invalid) { return; }

   Swal.fire({
     allowOutsideClick: false,
     type: 'info',
     text: 'Espere por favor...'
   });
   Swal.showLoading();

    this.auth.Login(this.unJugador)
     .subscribe( resp => {

      console.log(resp);
      Swal.close();

      if (this.recordarme = true) {
        localStorage.setItem('email', this.unJugador.email);
      }

      this.router.navigate(['/Principal']);


     }, (err) => {

      Swal.fire({
        allowOutsideClick: false,
        type: 'error',
        title: 'Error al autenticar',
        text: err.error.error.message
      });

     });
    }

  ngSubmit(form: NgForm) {

    this.Login(form);

    }
  }


