import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  // Atributos
  private historial: string[] = [];
  private apiKey: string = 'TLW0vMP2XfbikRmowavXJhaUjYWGtfCZ';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

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

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
