import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        margin: 10px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  // Atributos

  // Constructor
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Metodos
  logout(): void {
    this.router.navigate(['./auth']);
  }
}
