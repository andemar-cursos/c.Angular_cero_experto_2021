import { Component, OnInit } from '@angular/core';
import { noPuedeSerStrider } from '../../../shared/validators/validaciones';
import { emailPattern } from '../../../shared/validators/validaciones';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  // Atributos
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        // Se usa el validador por servicio
        [
          Validators.required,
          Validators.pattern(this.vs.nombreApellidoPattern),
        ],
      ],
      // Se usa el validador, por atributo estatico
      email: [
        '',
        [Validators.required, Validators.pattern(emailPattern)],
        [this.emailValidator],
      ],
      username: ['', [Validators.required, noPuedeSerStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      validators: [this.vs.camposIguales('password', 'password2')],
    }
  );

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.required) {
      return 'Email es obligatorio';
    } else if (errors?.pattern) {
      return 'El valor ingresado no tiene formato de correo';
    } else if (errors?.emailTomado) {
      return 'El email ya fue tomado';
    } else {
      return '';
    }
  }

  // Constructor
  constructor(
    private fb: FormBuilder,
    private vs: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Andemar Martinez',
      email: 'andemar@dev.com',
      username: 'Masiro ',
      password: '123123',
      password2: '123123',
    });
  }

  // Metodos
  guardar(): void {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

  campoNoValido(campo: string): boolean | null {
    return (
      this.miFormulario.controls[campo]?.invalid &&
      this.miFormulario.controls[campo]?.touched
    );
  }
}
