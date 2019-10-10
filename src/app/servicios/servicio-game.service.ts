import { log } from 'util';
import { Injectable } from '@angular/core';
import { MiHttpService } from '../servicios/mi-http/mi-http.service'; 
import {ServicioGenericoService} from '../servicios/servicio-generico.service';
import { Jugador } from '../clases/jugador';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable({
  providedIn: 'root'
})
export class ServicioGamesService {


  private respuestaGenerica:any = "opción fallida";
  unJugador:Jugador = new Jugador()
  private unaRespuesta:any;

  constructor(public http: Http,private otroHttpService:MiHttpService,private servicioGenerico:ServicioGenericoService) { }

  public httpGet_Game( tarea: string, parametro: any )
  {
    

    if(tarea == "Logueo")
    {
      this.respuestaGenerica = this.servicioGenerico.TraerUsuario("login?" + parametro)
      .then((d:any[])=>{
        this.unaRespuesta = d;
        console.log(this.unaRespuesta.token);
        localStorage.setItem("token",this.unaRespuesta.token);
        this.unJugador = this.unaRespuesta.elJugador;
        localStorage.setItem("jugadorLogueado",this.unJugador.usuario);
        localStorage.setItem("iDjugadorLogueado",this.unJugador.id.toString());
      })      
    }
    else if(tarea == "Registro")
    {
      this.respuestaGenerica = this.servicioGenerico.RegistrarUsuario("registro" + parametro)      
    }
    else if(tarea == "Listado")
    {
      this.respuestaGenerica = this.servicioGenerico.TraeListado("listado");
    }
    else if(tarea == "ActualizarPuntaje")
    {
      this.respuestaGenerica = this.servicioGenerico.ActualizarPuntajeJugador(parametro);
    }
    else if(tarea == "ListadoResultados")
    {
      this.respuestaGenerica = this.servicioGenerico.TraerPuntajes()
      // .then((listado:any[])=>{
        
      //   console.log(listado);
        
      // })    
    }
    else
    {
      console.log("No sabemos qué quiere hacer hacer");
    }
    return this.respuestaGenerica;

  }


}
