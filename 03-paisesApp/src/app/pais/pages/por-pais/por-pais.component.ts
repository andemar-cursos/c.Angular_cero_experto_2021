import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  // Atributos
  termino: string = '';

  // Constructor
  constructor() {

  }

  // Metodos

  buscar(): void {
    console.log(this.termino);
  }
}
