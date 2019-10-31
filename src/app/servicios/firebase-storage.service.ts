import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';

import { Jugador } from '../clases/jugador';
import { map } from 'rxjs/operators';
import { Cliente } from '../clases/cliente';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { RequestOptions } from '@angular/http';
import { UploadMetadata } from '@angular/fire/storage/interfaces';


@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor( private http: HttpClient,
    private storage: AngularFireStorage
  ) { }

  //Tarea para subir archivo
  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);

  }

  //Referencia del archivo
  public referenciaCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }
}
