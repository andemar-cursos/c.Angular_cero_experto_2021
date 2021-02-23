import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent implements OnInit {
  // Atributos
  heroeId: string = '';
  heroe!: Heroe;

  // Constructor
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.heroeId = this.activatedRoute.snapshot.params['id'];

    this.heroesService
      .getById(this.heroeId)
      .subscribe((heroe) => (this.heroe = heroe));
  }

  //Metodos
}
