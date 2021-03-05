import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  // Atributos
  private regiones: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  // Constructor
  constructor() {}

  // Metodos
  get getRegiones(): string[] {
    return [...this.regiones];
  }
}
