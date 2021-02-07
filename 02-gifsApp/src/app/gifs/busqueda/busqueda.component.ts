import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {

  // Atributos
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;


  // Constructor
  constructor(private gifsService: GifsService) {

  }

  // Metodos
  buscar(): void {
    const valor = this.txtBuscar.nativeElement.value;

    this.gifsService.buscarGif(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
