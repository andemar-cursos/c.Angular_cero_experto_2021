import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  // Atributos
  miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 2090ti'),
  });

  // Constructor
  constructor() {}

  // Metodos
}
