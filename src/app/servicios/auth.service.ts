import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../clases/jugador';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';



// @Pipe({name: 'name'})
// export class NamePipe implements PipeTransform {
//   transform(value: any): any {
    
//   }
}

@Injectable()
export class AuthService {

  constructor() { }
}
