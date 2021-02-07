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
    // Normaliza la buscqueda
    query = query.trim().toLowerCase();

    // Evita el historial con elementos duplicados
    if (this.historial.includes(query)) return;

    this.historial.unshift(query);

    // Se limita la lista a 10. (Cuando se agrega el 11, se elimina el ultimo)
    this.historial = this.historial.splice(0, 10);
  }
}
