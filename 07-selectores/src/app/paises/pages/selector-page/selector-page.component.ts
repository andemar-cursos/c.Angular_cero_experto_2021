import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  // Atributos
  miFormulario: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
  });

  // Constructor
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  // Metodos
  guardar(): void {
    console.log(this.miFormulario.value);
  }
}
