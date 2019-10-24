import { Cliente } from '../clases/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
token: string;
  crearCliente(cliente: Cliente){
   /*  Cliente={user:"pepe", pass:"123"} https://github.com/MarioAr/servidor-prueba-front*/
   console.log(JSON.stringify(cliente));
   return this.http.post('http://127.0.0.1:3003/clientes', {cliente}).subscribe(resp =>{
      console.log(resp);
    });
  }
devolverCliente(cliente: Cliente){
  /*  Cliente{user:"pepe", pass:"123"} */
 /*  return this.http.get('' ); */
}
loguearCliente(cliente: Cliente){
  /*  Cliente{user:"pepe", pass:"123"} */
  console.log(JSON.stringify(cliente));
  return this.http.post('http://127.0.0.1:3003/Login', {cliente}).subscribe(resp =>{
     console.log(resp);
   });
}
}
