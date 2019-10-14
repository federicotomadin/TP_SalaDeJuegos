import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../clases/jugador';
import { FormBuilder, FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';




// para poder hacer las validaciones
// import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }

//  constructor( private miConstructor: FormBuilder) { }
  // email=new FormControl ('',[Validators.email]);
  // formRegistro:FormGroup=this.miConstructor.group({
  //   usuario:this.email
  // });

  unJugador: Jugador;
  res: boolean;
  usuario = '';
  name = '';
  psw = '';
  // private MiHttpService: MiHttpService
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.unJugador = new Jugador();

  }
  RegistrarUsuario() {
  this.unJugador = new Jugador();


  // const parametrosRegistro = '?email=' + this.name + '&pass=' + this.psw + '&usuario=' + this.usuario;
  // const respuesta =   this.MiServicioGame.httpGet_Game('Registro', parametrosRegistro);
  //  console.log(respuesta);
  }

  ngSubmit(form: NgForm) {


  if (form.invalid) { return; }

  this.auth.NuevoUsuario(this.unJugador)
  .subscribe( resp => {

    console.log(resp);

  }, (err) => {
      console.log(err.error.error.message);

  })

  }
}