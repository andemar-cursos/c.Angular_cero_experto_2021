import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // Obetos
  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000,
  };

  // Metodos
  agregar(): void {
    console.log(this.nuevo);
  }
}
