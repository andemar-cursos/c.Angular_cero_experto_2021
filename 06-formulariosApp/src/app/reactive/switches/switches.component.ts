import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  // Atributos
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  // Constructor
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Se agrega la condicion, ya que no viene este valor
    // por defecto desde persona.
    this.miFormulario.reset({ ...this.persona, condiciones: false });
  }

  // Metodos
  guardar(): void {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;
  }
}
