import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
  // Variables
  private personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  // Constructor
  constructor() {
    console.log('servicio inicializado');
  }

  // Metodos
  get getPersonajes(): Personaje[] {
    return [...this.personajes];
  }
}
