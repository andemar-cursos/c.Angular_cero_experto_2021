import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  // Atributos
  termino: string = '';

  // Constructor
  constructor(private paisService: PaisService) {}

  // Metodos

  buscar(): void {
    this.paisService.buscarPais(this.termino).subscribe((resp) => {
      console.log(resp);
    });
  }
}
