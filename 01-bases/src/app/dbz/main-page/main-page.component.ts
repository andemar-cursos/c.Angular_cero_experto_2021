import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // Metodos
  agregar(): void {
    console.log('Esto es una prueba');
  }
}
