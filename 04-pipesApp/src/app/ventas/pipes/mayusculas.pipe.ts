import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  // Transformacion
  transform(data: string, enMayus: boolean = true): string {
    return enMayus ? data.toUpperCase() : data.toLowerCase();
  }
}
