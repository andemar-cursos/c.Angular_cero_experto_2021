import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  // Atributos
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Clannad', Validators.required],
      ],
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  // Constructor
  constructor(private fb: FormBuilder) {}

  // Metodos
  guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  campoEsValido(campo: string): boolean | null {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  agregarFavorito(): void {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    this.favoritosArr.push(
      this.fb.control(this.nuevoFavorito.value, Validators.required)
    );
    // O
    // this.favoritosArr.push(
    //   new FormControl(this.nuevoFavorito.value, Validators.required)
    // );

    this.nuevoFavorito.reset();
  }

  borrar(index: number): void {
    this.favoritosArr.removeAt(index);
  }
}
