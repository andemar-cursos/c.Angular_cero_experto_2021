import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AgregarComponent implements OnInit {
  // Atributos
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];
  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
  };
  heroeId: string | undefined;

  // Constructor
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.heroeId = this.activatedRoute.snapshot.params.id;

    if (this.heroeId !== undefined) {
      this.heroesService
        .getById(this.heroeId!)
        .subscribe((heroe) => (this.heroe = heroe));
    }
  }

  // Metodos
  guardar(): void {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      this.heroesService
        .actualizarHeroe(this.heroe)
        .subscribe((resp) => this.mostrarSnackbar('Registro actualizado'));
    } else {
      this.heroesService.agregarHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes/editar', heroe.id]);
        this.mostrarSnackbar('Registro creado');
      });
    }
  }

  borrar(): void {

    this.dialog.open(ConfirmarComponent, {
      width: '250px',
    });

    // this.heroesService.borrarheroe(this.heroe.id!).subscribe((resp) => {
    //   this.router.navigate(['/heroes']);
    // });
  }

  mostrarSnackbar(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 2500,
    });
  }
}
