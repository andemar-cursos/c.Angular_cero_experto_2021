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

  initForm = {
    producto: 'RTX 4090Ti',
    precio: 10,
    exitencias: 10,
  };

  // Constructor
  constructor() {}

  ngOnInit(): void {}

  // Metodos
  guardar(): void {
    console.log(this.miFormulario.value);
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0,
    });
  }

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls.producto?.invalid &&
      this.miFormulario?.controls.producto?.touched
    );
  }

  precioValido(): boolean {
    return (
      this.miFormulario?.controls.precio?.value < 0 &&
      this.miFormulario?.controls.precio?.touched
    );
  }
}
