import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // Atributos
  get personajes(): Personaje[] {
    return this.dbzService.getPersonajes;
  }

  // Constructor
  constructor(private dbzService: DbzService) {}
}
