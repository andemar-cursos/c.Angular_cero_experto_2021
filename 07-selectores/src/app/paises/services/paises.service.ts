import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Pais, PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  // Atributos
  private baseUrl: string = 'https://restcountries.eu/rest/v2';

  private regiones: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  get getRegiones(): string[] {
    return [...this.regiones];
  }

  // Constructor
  constructor(private http: HttpClient) {}

  // Metodos
  getPaisesByRegion(region: string): Observable<PaisSmall[]> {
    const url = `${this.baseUrl}/region/${region}?fields=alpha3Code;name`;
    return this.http.get<PaisSmall[]>(url);
  }

  getPaisByCode(codigo: string): Observable<Pais | null> {
    if (!codigo) {
      return of(null);
    }

    const url = `${this.baseUrl}/alpha/${codigo}`;

    return this.http.get<Pais>(url);
  }

  getPaisByCodeSmall(codigo: string): Observable<PaisSmall> {
    const url = `${this.baseUrl}/alpha/${codigo}?fields=alpha3Code;name`;

    return this.http.get<Pais>(url);
  }

  getPaisesPorCodigos(borders: string[]) {
    if (!borders) {
      return of([]);
    }

    const peticiones: Observable<PaisSmall>[] = [];

    borders.forEach((border) => {
      const peticion = this.getPaisByCodeSmall(border);
      peticiones.push(peticion);
    });

    return combineLatest(peticiones);
  }
}
