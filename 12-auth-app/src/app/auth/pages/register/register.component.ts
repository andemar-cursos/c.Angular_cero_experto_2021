import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

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
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  // Metodos
  register(): void {
    const { name, email, password } = this.miFormulario.value;

    this.authService.register(name, email, password).subscribe((ok) => {
      ok === true
        ? this.router.navigateByUrl('/dashboard')
        : Swal.fire('Error', ok, 'error');
    });
  }
}
