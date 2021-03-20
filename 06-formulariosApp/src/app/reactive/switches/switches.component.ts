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

    this.miFormulario.valueChanges.subscribe(({ condiciones, ...rest }) => {
      // Con la desestructuracion se separa las condiciones
      // y se inserta lo demas.
      this.persona = rest;
    });

    // Esto es para suscribirse a un unico control
    this.miFormulario.get('condiciones')?.valueChanges.subscribe(console.log);
  }

  // Metodos
  guardar(): void {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;
  }
}
