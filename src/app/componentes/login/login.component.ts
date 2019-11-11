import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Jugador } from '../../clases/jugador';
import { AuthService } from '../../servicios/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recordarme = false;
  unJugador: Jugador;
  captchaLogin = 'vacio';
  vCardData: string = '';

  

  ReconociendoCaptcha(cap: string) {
    this.captchaLogin = cap;
  }

  constructor(private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router) {

    this.vCardData = `BEGIN:VCARD
    VERSION:3.0
    EMAIL:email
    FN:fn
    ORG:org`
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
    if (this.captchaLogin === 'vacio') {

      setTimeout(function() {
        Swal.fire({
        allowOutsideClick: false,
        type: 'error',
        text: 'Captcha no validado',
      });
     }, 200);
     Swal.close();
      this.router.navigate(['/Login']);
      return;
    }

   Swal.fire({
     allowOutsideClick: false,
     type: 'info',
     text: 'Espere por favor...'
   });
   Swal.showLoading();

    this.auth.Login(this.unJugador)
     .subscribe( resp => {
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


