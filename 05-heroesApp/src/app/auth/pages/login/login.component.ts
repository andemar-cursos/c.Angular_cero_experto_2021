import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{
  // Atributos


  // Constructor
  constructor(private router: Router) { }


  // Metodos
  login(): void {
    // Ir al back
    // Un usuario

    this.router.navigate(['./heroes']);
  }
}
