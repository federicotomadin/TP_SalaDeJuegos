import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from '../componentes/listado/listado.component'
import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { CrucigramaDigitalComponent } from '../componentes/crucigrama-digital/crucigrama-digital.component';
import { AuthGuard } from '../auth.guard';

// declaro donde quiero que se dirija
const MiRuteo = [
{path: 'Jugadores', component: JugadoresListadoComponent, canActivate: [ AuthGuard ]},
{path: '' , component: LoginComponent, canActivate: [ AuthGuard ]},
{path: 'Login' , component: LoginComponent},
{path: 'QuienSoy' , component: QuienSoyComponent, canActivate: [ AuthGuard ]},
{path: 'Registro' , component: RegistroComponent, canActivate: [ AuthGuard ]},
{path: 'Principal' , component: PrincipalComponent, canActivate: [ AuthGuard ]},
{path: 'Listado' , component: ListadoComponent, canActivate: [ AuthGuard ]},
{path: 'Paises' , component: ListadoDePaisesComponent},

{ path: 'Juegos' , component: JuegosComponent,
children:
     [{path: '' , component: MenuCardComponent},
     {path: 'Adivina' , component: AdivinaMasListadoComponent, canActivate: [ AuthGuard ]},
      {path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent, canActivate: [ AuthGuard ]},
      {path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent, canActivate: [ AuthGuard ]},
      {path: 'Agilidad' , component: AgilidadMasListadoComponent, canActivate: [ AuthGuard ]},
      {path: 'CrucigramaDigital' , component: CrucigramaDigitalComponent, canActivate: [ AuthGuard ]}]
},
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
