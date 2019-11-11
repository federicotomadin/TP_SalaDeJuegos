import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpModule } from '@angular/http';


import { MiHttpService } from './servicios/mi-http/mi-http.service';
import { PaisesService } from './servicios/paises.service';

import { JugadoresService } from './servicios/jugadores.service';
import { FirebaseStorageService } from './servicios/firebase-storage.service';
import { NgModule } from '@angular/core';


import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { RuteandoModule } from './ruteando/ruteando.module';
import { ListadoComponent } from './componentes/listado/listado.component';
import { HttpClientModule } from '@angular/common/http';

import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';

import { JuegoServiceService } from './servicios/juego-service.service';
import { ListadosComponent } from './componentes/listados/listados.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { ListadoDePaisesComponent } from './componentes/listado-de-paises/listado-de-paises.component';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { CrucigramaDigitalComponent } from './componentes/crucigrama-digital/crucigrama-digital.component';
import { AuthService } from './servicios/auth.service';
import { ClienteService } from './servicios/cliente.service';
import { QRCodeModule } from 'angular2-qrcode';


import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, AngularFireUploadTask } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    ListadoDePaisesComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    SexoPipe,
    CrucigramaDigitalComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteandoModule,
    UtilsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    QRCodeModule
    // RouterModule.forRoot([])
    // NgbModule.forRoot(MiRuteo),
    // importo el ruteo
    // RouterModule.forRoot(MiRuteo)
  ],
  providers: [ JuegoServiceService, MiHttpService, PaisesService,
              JugadoresService, AuthService, ClienteService, FirebaseStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
