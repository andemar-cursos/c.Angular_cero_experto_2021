import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  // TODO: Temporal

  // Valida que el string sea: 'Nombre Apellido'
  nombreApellidoPattern: string = '([a-zA-Z+]+) ([a-zA-Z]+)';

  // Atributos
  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this.nombreApellidoPattern)],
    ],
  });

  // Constructor
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  // Metodos
  guardar(): void {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

  campoNoValido(campo: string): boolean | null {
    return (
      this.miFormulario.controls[campo]?.errors &&
      this.miFormulario.controls[campo]?.touched
    );
  }
}
