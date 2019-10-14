import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Jugador } from '../../clases/jugador';
import { ServicioGamesService } from '../../servicios/servicio-games.service';
import { MiHttpService } from '../../servicios/mi-http/mi-http.service';
import { FormBuilder, FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { NgForOf } from '@angular/common';




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
  constructor(private MiServicioGame: ServicioGamesService, private MiHttpService: MiHttpService) { }

  ngOnInit() {
    this.unJugador = new Jugador();
    this.unJugador.email = 'federicotomadin@gmail.com';
  }
  RegistrarUsuario() {
  this.unJugador = new Jugador();


  const parametrosRegistro = '?email=' + this.name + '&pass=' + this.psw + '&usuario=' + this.usuario;
  const respuesta =   this.MiServicioGame.httpGet_Game('Registro', parametrosRegistro);
   console.log(respuesta);
  }

  ngSubmit(form: NgForm) {


  if (form.invalid) { return; }

    console.log(this.unJugador);
    console.log(form);
  }
}