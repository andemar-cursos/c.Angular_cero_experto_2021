import { FormControl } from '@angular/forms';

// Valida que el string sea: 'Nombre Apellido'
export const nombreApellidoPattern: string = '([a-zA-Z+]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

// Metodos
export const noPuedeSerStrider = (control: FormControl): any | null => {
  const valor: string = control.value?.trim().toLowerCase();

  return valor === 'andemar' ? { noAndemar: true } : null;
};
