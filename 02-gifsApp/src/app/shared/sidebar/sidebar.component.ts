import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  // Atributos
  get historial(): string[] {
    return this.gifsService.getHistorial;
  }

  // Constructor
  constructor(private gifsService: GifsService) {}

  // Metodos
  buscar(item: string): void {
    this.gifsService.buscarGif(item);
  }
}
