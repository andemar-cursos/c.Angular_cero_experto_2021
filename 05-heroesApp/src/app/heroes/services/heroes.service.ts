import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  // Atributos
  endpoint: string = `${environment.baseUrl}/heroes`;

  // Constructor
  constructor(private http: HttpClient) {}

  // Metodos

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.endpoint);
  }

  getById(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.endpoint}/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.endpoint}?q=${termino}&_limit=6`);
  }
}
