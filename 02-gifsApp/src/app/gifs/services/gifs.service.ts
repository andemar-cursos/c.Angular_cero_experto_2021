import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  // Atributos
  private historial: string[] = [];

  // Constructor
  constructor() {}

  // Metodos
  get getHistorial(): string[] {
    return [...this.historial];
  }

  buscarGif(query: string): void {
    this.historial.unshift(query);
    console.log(this.historial);
  }
}
