import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  // Atributos

  // Manera manual
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 2090ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // });

  // Manera 'automatica' con js litarales
  miFormulario: FormGroup = this.fb.group({
    nombre: ['RTX 4080ti'],
    precio: [1500],
    existencias: [5],
  });

  // Constructor
  constructor(private fb: FormBuilder) {}

  // Metodos
}
