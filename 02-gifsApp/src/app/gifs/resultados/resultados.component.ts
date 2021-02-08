import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {
  // Atributos
  get resultados(): any[] {
    return this.gifsService.resultados;
  }

  // Constructor
  constructor(private gifsService: GifsService) {}

  // Metodos
}
