import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  // Atributos

  // Valida que el string sea: 'Nombre Apellido'
  public nombreApellidoPattern: string = '([a-zA-Z+]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  // Constructor
  constructor() {}

  // Metodos

  // Metodos
  noPuedeSerStrider = (control: FormControl): ValidationErrors | null => {
    const valor: string = control.value?.trim().toLowerCase();

    return valor === 'andemar' ? { noAndemar: true } : null;
  };

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noiguales: true };
      } else {
        formGroup.get(campo2)?.setErrors(null);
        return null;
      }
    };
  }
}
