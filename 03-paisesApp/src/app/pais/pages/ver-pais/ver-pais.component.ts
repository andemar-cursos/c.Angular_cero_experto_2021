import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.activateRoute.params.subscribe(({ id }) => {
      this.paisSerice.byAlpha(id).subscribe(console.log);
    });
  }

  // Metodos
}
