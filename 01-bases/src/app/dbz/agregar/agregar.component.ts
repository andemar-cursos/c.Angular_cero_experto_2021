import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  // Atributos
  @Input() nuevo: Personaje = { nombre: '', poder: 0 };

  // Constructor
  constructor(private dbzService: DbzService) {}

  // Metodos
  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
