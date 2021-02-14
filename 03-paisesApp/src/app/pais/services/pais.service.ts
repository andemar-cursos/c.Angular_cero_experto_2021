import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  // Atributos
  private apiUrl = 'https://restcountries.eu/rest/v2';

  // Constructor
  constructor(private http: HttpClient) {}

  // Metodos

  buscarPais(terminoBusqueda: string): Observable<any> {
    const url = `${this.apiUrl}/name/${terminoBusqueda}`;

    return this.http.get(url);
  }
}
