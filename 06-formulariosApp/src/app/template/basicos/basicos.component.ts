import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // Atributos
  @ViewChild('miFormulario') miFormulario!: NgForm;

  // Constructor
  constructor() {}

  ngOnInit(): void {}

  // Metodos
  guardar(): void {
    console.log(this.miFormulario.value);
  }

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls.producto?.invalid &&
      this.miFormulario?.controls.producto?.touched
    );
  }
}
