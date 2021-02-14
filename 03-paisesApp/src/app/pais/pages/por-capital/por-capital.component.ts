import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  // Atributos
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  // Constructor
  constructor(private paisService: PaisService) {}

  // Metodos

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
