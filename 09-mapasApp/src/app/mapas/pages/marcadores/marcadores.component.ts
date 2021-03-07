import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .mapa-container {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class MarcadoresComponent implements AfterViewInit {
  // Atributos
  @ViewChild('mapa') divMap!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-76.3092861, 3.5407376];

  // Constructor
  constructor() {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.mapa);
  }

  ngOnInit(): void {}

  // Metodos
}
