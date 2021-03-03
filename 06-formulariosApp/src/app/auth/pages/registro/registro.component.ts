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
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  // Atributos
  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this.nombreApellidoPattern)],
    ],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
  });

  // Constructor
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Andemar Martinez',
      email: 'andemar@dev.com',
    });
  }

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
