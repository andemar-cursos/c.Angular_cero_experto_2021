import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  // Atributos
  private historial: string[] = [];
  private apiKey: string = 'TLW0vMP2XfbikRmowavXJhaUjYWGtfCZ';

  // Cambiar any por su tipo correspondiente
  public resultados: Gif[] = [];

  // Constructor
  constructor(private http: HttpClient) {
    // tslint:disable-next-line: no-non-null-assertion
    this.historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // tslint:disable-next-line: no-non-null-assertion
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  // Metodos
  get getHistorial(): string[] {
    return [...this.historial];
  }

  buscarGif(query: string): void {
    // Normaliza la buscqueda
    query = query.trim().toLowerCase();

    // Evita el historial con elementos duplicados
    if (!this.historial.includes(query)) {
      this.historial.unshift(query);

      // Se limita la lista a 10. (Cuando se agrega el 11, se elimina el ultimo)
      this.historial = this.historial.splice(0, 10);

      // Save Search
      localStorage.setItem('historial', JSON.stringify(this.historial));
    }

    this.http
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=TLW0vMP2XfbikRmowavXJhaUjYWGtfCZ&q=${query}&limit=10`
      )
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
