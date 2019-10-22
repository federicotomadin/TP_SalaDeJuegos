import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  token: boolean;
  email: string;

  constructor(private authService: AuthService, private router: Router) {
  if (localStorage.getItem('token') == null) {
    this.token = false;

  } else {
    this.token = true;
  }

  this.email = authService.emailUsuario;

   }

  ngOnInit() {
  }

  SalirDeLaSesion() {
    this.authService.Logout();
    this.router.navigate(['/Login']);
  }

}
