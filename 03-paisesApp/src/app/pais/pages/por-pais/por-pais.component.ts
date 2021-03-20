import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  // Atributos
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  // Constructor
  constructor(private paisService: PaisService) {}

  // Metodos

  buscar(termino: string): void {
    
    this.mostrarSugerencias = false;

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencia(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino).subscribe((paises) => {
      this.paisesSugeridos = paises.splice(0, 5);
    }, (err) => this.paisesSugeridos = []);
  }

  buscarSugerido(termino: string): void {
    this.buscar(termino);
  }
}
