import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  });

  // Constructor
  constructor(private fb: FormBuilder) {}

  // Metodos
  campoEsValido(campo: string): boolean | null {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }
}
