import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  // Atributos
  miFormulario: FormGroup = this.fb.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  // Constructor

  constructor(private fb: FormBuilder) {}

  // Metodos
  login(): void {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }
}
