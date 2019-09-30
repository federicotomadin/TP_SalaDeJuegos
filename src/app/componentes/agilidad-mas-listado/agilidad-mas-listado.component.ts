import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<Juego>;
  constructor() { this.listadoParaCompartir = new Array<any>();
  }

  ngOnInit() {
  }

  tomarJuegoTerminado(juego: Juego)
  {
    this.listadoParaCompartir.push(juego);
    console.log(this.listadoParaCompartir);
    // console.info('en app', this.listadoParaCompartir);
  }
}
