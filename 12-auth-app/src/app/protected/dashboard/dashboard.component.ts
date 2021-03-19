import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  // Constructor
  constructor(private router: Router) {}

  // Metodos
  logout(): void {
    this.router.navigateByUrl('/auth/login');
  }
}
