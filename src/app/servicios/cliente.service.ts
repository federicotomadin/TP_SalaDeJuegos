import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';

import { Cliente } from '../clases/cliente';
import { auto } from '../clases/auto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {

  }

token: string;
 headers: HttpHeaders;
  crearCliente(cliente: Cliente){
   /*  Cliente={user:"pepe", pass:"123"} https://github.com/MarioAr/servidor-prueba-front*/
   console.log(JSON.stringify(cliente));
   return this.http.post('http://127.0.0.1:3003/clientes', {cliente})
   .subscribe(resp =>{
      console.log(resp);
    });
  }

devolverCliente(cliente: Cliente){
  /*  Cliente{user:"pepe", pass:"123"} */
 /*  return this.http.get('' ); */
}

loguearCliente(cliente: Cliente){
  /*  Cliente{user:"pepe", pass:"123"} */
  return this.http.post('http://127.0.0.1:3003/Login', {cliente})
  .subscribe(resp =>{

    this.token = resp['token'];
    this.headers = new HttpHeaders({
     'Content-Type': 'application/json',
     'token': resp['token']
    });
   });
}

CargarAuto(auto: auto) {

  this.http.post('http://127.0.0.1:3003/auto', {auto}, {headers: this.headers})
   .subscribe(resp => {
     console.log(resp);
   })
  }


CargarArchivo(archivo: File) {
 
  const fd = new FormData();
  fd.append('image', archivo, archivo.name);
  this.http.post('', fd, {
    reportProgress: true,
    observe: 'events'
  })
  .subscribe(event => {
     if(event.type === HttpEventType.UploadProgress) {
       console.log('Update Progress:', Math.round(event.loaded/event.total) + '%')
     } else if (event.type === HttpEventType.Response) {
        console.log(event);
     }  
  })


}





}
