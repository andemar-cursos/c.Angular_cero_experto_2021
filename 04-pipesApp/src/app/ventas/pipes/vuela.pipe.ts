import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela',
})
export class vuelaPipe implements PipeTransform {
  // Transformacion
  transform(data: boolean): string {
    return data ? 'vuela' : 'no vuela';
  }
}
