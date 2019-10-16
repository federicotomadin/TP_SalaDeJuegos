import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
   
  }

  IrAlInicio()
  {
     this.router.navigate(['/Login']);
  }

}
