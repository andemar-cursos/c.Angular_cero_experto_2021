import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = { nombre: '', poder: 0 };
  @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  // Metodos
  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.nuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
