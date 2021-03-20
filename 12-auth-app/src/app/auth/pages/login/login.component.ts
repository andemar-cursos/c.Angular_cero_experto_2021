import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  // Atributos
  miFormulario: FormGroup = this.fb.group({
    email: ['test@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  // Constructor

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  // Metodos
  login(): void {
    const { email, password } = this.miFormulario.value;

    this.authService.login(email, password).subscribe((ok) => {
      ok ? this.router.navigateByUrl('/dashboard') : null;
    });
  }
}
