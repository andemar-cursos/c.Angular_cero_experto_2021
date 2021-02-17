import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  // Atributos

  nombreLower: string = 'andemar';
  nombreupper: string = 'ANDEMAR';
  nombreCompl: string = 'aNdEmAr';

  fecha: Date = new Date();

}
