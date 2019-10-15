import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Jugador } from '../../clases/jugador';
import { AuthService } from '../../servicios/auth.service';
import Swal from 'sweetalert2';
import { Router} from '@angular/router';



// para poder hacer las validaciones
// import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  recordarme = false;
  unJugador: Jugador;
  res: boolean;
  usuario = '';
  name = '';
  psw = '';
  // private MiHttpService: MiHttpService
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.unJugador = new Jugador();

  }
  RegistrarUsuario() {
  this.unJugador = new Jugador();
  }

  ngSubmit(form: NgForm) {


  if (form.invalid) { return; }

  Swal.fire({
    allowOutsideClick: false,
    type: 'info',
    text: 'Espere por favor...'
  });
  Swal.showLoading();

  this.auth.NuevoUsuario(this.unJugador)
  .subscribe( resp => {

    console.log(resp);
    Swal.close();

    if (this.recordarme = true) {
      localStorage.setItem('email', this.unJugador.email);
    }
    this.router.navigateByUrl('/Principal');

  }, (err) => {
      console.log(err.error.error.message);
      Swal.fire({
        allowOutsideClick: false,
        type: 'error',
        title: 'Error al autenticar',
        text: err.error.error.message
      });

  });

  }
}
