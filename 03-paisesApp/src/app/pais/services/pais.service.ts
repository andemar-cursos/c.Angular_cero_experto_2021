import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  // Atributos
  private apiUrl = 'https://restcountries.eu/rest/v2';

  get httpParams(): HttpParams {
    return new HttpParams().set(
      'fields',
      'name;capital;alpha2Code;flag;population'
    );
  }

  // Constructor
  constructor(private http: HttpClient) {}

  // Metodos

  buscarPais(terminoBusqueda: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${terminoBusqueda}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital(terminoBusqueda: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${terminoBusqueda}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  byAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
