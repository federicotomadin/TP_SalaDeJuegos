import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Jugador } from '../../clases/jugador';
import { AuthService } from '../../servicios/auth.service';
import Swal from 'sweetalert2';
import { Router} from '@angular/router';
import { JugadoresService } from '../../servicios/jugadores.service';
import { FirebaseStorageService } from '../../servicios/firebase-storage.service';



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
  urlPublica: string;

  resultado: string;
  // private MiHttpService: MiHttpService
  constructor(private auth: AuthService, private router: Router,
    private serviceFireStorage: FirebaseStorageService, private servicioJugadores: JugadoresService) { }

  ngOnInit() {
    this.unJugador = new Jugador();
  }

//--------------------------------USUARIO NUEVO--------------------------------------

  RegistrarUsuario() {
  this.unJugador = new Jugador();
  this.unJugador.puntaje = '0';
  }


  //--------------------------------USUARIO NUEVO--------------------------------------

  ngSubmit(form: NgForm) {

  if (form.invalid) { return; }

  Swal.fire({
    allowOutsideClick: false,
    type: 'info',
    text: 'Espere por favor...'
  });
  Swal.showLoading();

  this.unJugador.puntaje = '0';
  this.servicioJugadores.CrearJugador(this.unJugador)
   .subscribe( (resp: any) => {
  });

  this.auth.NuevoUsuario(this.unJugador)
  .subscribe( resp => {

    Swal.close();

    if (this.recordarme = true) {
      localStorage.setItem('email', this.unJugador.email);
    }
    this.router.navigateByUrl('/Login');

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

//-------------------------------- SUBIR FOTO --------------------------------------


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
   }

}
}
