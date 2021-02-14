import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  // Atributos

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
      .pipe(switchMap(({ id }) => this.paisSerice.byAlpha(id)))
      .subscribe(console.log);
  }

  // Metodos
}
