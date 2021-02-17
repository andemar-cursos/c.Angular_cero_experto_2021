import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // Atributos
  nombre: string = 'Andemar';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
}
