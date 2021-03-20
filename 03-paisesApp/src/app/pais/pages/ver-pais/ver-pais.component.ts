import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  // Atributos

  pais!: Country;

  // Constructor
  constructor(
    private activateRoute: ActivatedRoute,
    private paisSerice: PaisService
  ) {}

  ngOnInit(): void {
    // Normal
    // this.activateRoute.params.subscribe(({ id }) => {
    //   this.paisSerice.byAlpha(id).subscribe(console.log);
    // });

    // Con RXJS
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.paisSerice.byAlpha(id)),
        tap( console.log )
        )
      .subscribe(pais => this.pais = pais);
  }

  // Metodos
}
