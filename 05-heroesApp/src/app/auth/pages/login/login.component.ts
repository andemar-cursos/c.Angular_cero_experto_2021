import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  // Atributos

  // Constructor
  constructor(private router: Router, private authService: AuthService) {}

  // Metodos
  login(): void {
    // Ir al back
    // Un usuario
    this.authService.login().subscribe((auth) => {
      if (auth) {
        this.router.navigate(['./heroes']);
      }
    });
  }
}
