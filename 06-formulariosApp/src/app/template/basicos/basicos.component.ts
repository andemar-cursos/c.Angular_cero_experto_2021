import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // Atributos

  // Constructor
  constructor() {}

  ngOnInit(): void {}

  // Metodos
  guardar(miFormulario: NgForm): void {
    console.log(miFormulario.value);
  }
}
