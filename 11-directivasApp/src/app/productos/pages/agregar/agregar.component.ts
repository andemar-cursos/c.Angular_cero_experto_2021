import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  // Atributos
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  });
  msg: string = 'Andemar';
  color: string = 'red';

  // Constructor
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  // Metodos
  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarTexto(): void {
    this.msg = 'Se cambio';
  }

  cambiarColor(): void {
    this.color = 'blue';
  }
}
