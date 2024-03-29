import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .mapa-container {
        width: 100%;
        height: 100%;
      }

      .list-group {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99;
      }

      li {
        cursor: pointer;
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

  // - marcadores
  marcadores: MarcadorColor[] = [];

  // Constructor
  constructor() {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    this.leerMarcadoresLocalStorage();
  }

  ngOnInit(): void {}

  // Metodos
  agregarMarcador(): void {
    // Color aleatorio
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const newMarker = new mapboxgl.Marker({
      draggable: true,
      color,
    })
      .setLngLat(this.center)
      .addTo(this.mapa);

    newMarker.on('dragend', () => {
      this.guardarMarcadoresLocalStorage();
    });

    this.marcadores.push({
      color,
      marker: newMarker,
    });

    this.guardarMarcadoresLocalStorage();
  }

  irMarcador(marcador: mapboxgl.Marker): void {
    this.mapa.flyTo({
      center: marcador.getLngLat(),
    });
  }

  guardarMarcadoresLocalStorage(): void {
    const lngLatArr: MarcadorColor[] = [];

    this.marcadores.forEach((marcador) => {
      const color = marcador.color;
      const { lng, lat } = marcador.marker!.getLngLat();

      lngLatArr.push({
        color,
        centro: [lng, lat],
      });
    });

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr));
  }

  leerMarcadoresLocalStorage(): void {
    if (!localStorage.getItem('marcadores')) {
      return;
    }

    const lngLatArr: MarcadorColor[] = JSON.parse(
      localStorage.getItem('marcadores')!
    );

    lngLatArr.forEach((marcador) => {
      const newMarker = new mapboxgl.Marker({
        color: marcador.color,
        draggable: true,
      })
        .setLngLat(marcador.centro!)
        .addTo(this.mapa);

      this.marcadores.push({
        marker: newMarker,
        color: marcador.color,
      });

      newMarker.on('dragend', () => {
        this.guardarMarcadoresLocalStorage();
      });
    });
  }

  borrarMarcador(index: number): void {
    this.marcadores[index].marker?.remove();
    this.marcadores.splice(index, 1);
    this.guardarMarcadoresLocalStorage();
  }
}
