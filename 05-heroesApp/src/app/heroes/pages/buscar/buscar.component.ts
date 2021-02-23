import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  // Atributo

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe;

  // Constructor
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  // Metodos
  buscando(): void {
    this.heroesService
      .getSugerencias(this.termino)
      .subscribe((heroes) => (this.heroes = heroes));
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent): void {
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService
      .getById(heroe.id!)
      .subscribe((heroe) => (this.heroeSeleccionado = heroe));
  }
}
