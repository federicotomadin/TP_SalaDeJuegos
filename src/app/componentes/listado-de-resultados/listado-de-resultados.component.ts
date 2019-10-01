
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { ServicioGamesService } from '../../servicios/servicio-games.service';


@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
  @Input()

  // @Output() enviarListado: EventEmitter<any>= new EventEmitter<any>();

  listado: Array<any>;
  lista: any[];

  constructor() {
  }

  ngOnInit() {

  }


}
