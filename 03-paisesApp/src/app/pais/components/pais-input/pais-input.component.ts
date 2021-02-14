import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent {
  // Atributos

  @Output() enter: EventEmitter<string> = new EventEmitter<string>();
  termino: string = '';

  // Constructor
  constructor() {}

  // Metodos

  buscar(): void {
    this.enter.emit(this.termino);
  }
}
