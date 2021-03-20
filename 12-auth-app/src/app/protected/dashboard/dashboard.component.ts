import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Usuario } from '../../auth/interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 15px;
      }
    `,
  ],
})
export class DashboardComponent {
  // Atributos

  get getUsuario() {
    return this.authService.getUsuario;
  }

  // Constructor
  constructor(private router: Router, private authService: AuthService) {}

  // Metodos
  logout(): void {
    this.router.navigateByUrl('/auth/login');
  }
}
