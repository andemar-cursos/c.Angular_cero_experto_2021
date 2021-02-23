import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent implements OnInit {
  // Atributos
  heroeId: string = "";

  // Constructor
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.heroeId = this.activatedRoute.snapshot.params['id'];
    console.log(this.heroeId);
  }

  //Metodos
}
