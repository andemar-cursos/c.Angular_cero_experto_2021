import { Component, OnInit } from '@angular/core';
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

  // Constructor
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  // Metodos
  buscando(): void {
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
    
  }
}
