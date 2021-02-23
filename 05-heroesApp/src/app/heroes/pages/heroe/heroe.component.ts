import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `],
})
export class HeroeComponent implements OnInit {
  // Atributos
  heroeId: string = '';
  heroe!: Heroe;

  // Constructor
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.heroeId = this.activatedRoute.snapshot.params['id'];

    this.heroesService
      .getById(this.heroeId)
      .subscribe((heroe) => (this.heroe = heroe));
  }

  //Metodos

  regresar(): void {
    this.router.navigate(['/heroes/listado']);
  }
}
