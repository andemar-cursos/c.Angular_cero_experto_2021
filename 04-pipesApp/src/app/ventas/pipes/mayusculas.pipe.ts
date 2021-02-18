import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  // Transformacion
  transform(data: string): string {
    return 'HOLA MUNDO';
  }

}
