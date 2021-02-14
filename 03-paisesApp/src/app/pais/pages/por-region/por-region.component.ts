import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px
    }
  `],
})
export class PorRegionComponent {
  // Atributos
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  // Constructor
  constructor() {}

  // Metodos
  activarRegion(region: string): void {
    this.regionActiva = region;
  }
}
