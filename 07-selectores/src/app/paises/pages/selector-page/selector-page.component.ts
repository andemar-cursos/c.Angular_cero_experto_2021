import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { paisSmall } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  // Atributos
  miFormulario: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    pais: ['', [Validators.required]],
  });

  regiones: string[] = [];
  paises: paisSmall[] = [];

  // Constructor
  constructor(private fb: FormBuilder, private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.regiones = this.paisesService.getRegiones;

    // Cuando cambie la region
    this.miFormulario.get('region')?.valueChanges.subscribe((region) => {
      this.paisesService
        .getPaisesByRegion(region)
        .subscribe((paises) => (this.paises = paises));
    });
  }

  // Metodos
  guardar(): void {
    console.log(this.miFormulario.value);
  }
}
