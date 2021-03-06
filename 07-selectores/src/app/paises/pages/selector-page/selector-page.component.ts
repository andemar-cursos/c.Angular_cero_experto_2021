import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';

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
    frontera: ['', [Validators.required]],
  });

  regiones: string[] = [];
  paises: PaisSmall[] = [];

  // Constructor
  constructor(private fb: FormBuilder, private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.regiones = this.paisesService.getRegiones;

    // Se dispara cuando alguien elige un continente
    this.miFormulario
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => this.miFormulario.get('pais')?.reset('')),
        switchMap((region) => this.paisesService.getPaisesByRegion(region))
      )
      .subscribe((paises) => (this.paises = paises));

    // Se dispara cuando alguien elige un pais
    this.miFormulario.get('pais')?.valueChanges.subscribe(console.log);
  }

  // Metodos
  guardar(): void {
    console.log(this.miFormulario.value);
  }
}
