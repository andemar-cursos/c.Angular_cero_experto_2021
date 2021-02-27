import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  // Atributos
  @ViewChild('miFormulario') miFormulario!: NgForm;

  // Cosntructor
  constructor() {}

  ngOnInit(): void {}

  // Metodos
  guardar(): void {
    console.log('guardar');
  }
}
