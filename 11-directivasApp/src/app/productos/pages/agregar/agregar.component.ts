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
  msg: string = 'Debe haber un texto';
  color: string = 'red';

  // Constructor
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  // Metodos
  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarTexto(): void {
    this.msg = Math.random().toString();
  }

  cambiarColor(): void {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    this.color = color;
  }
}
