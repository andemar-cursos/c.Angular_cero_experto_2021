import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  // Atributos
  miFormulario: FormGroup = this.fb.group({
    name: ['test1', [Validators.required]],
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  // Constructor
  constructor(private fb: FormBuilder) {}

  // Metodos
  register(): void {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }
}
