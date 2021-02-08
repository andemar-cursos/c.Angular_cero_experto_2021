import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  // Atributos
  private historial: string[] = [];
  private apiKey: string = 'TLW0vMP2XfbikRmowavXJhaUjYWGtfCZ';

  // Constructor
  constructor(private http: HttpClient) {}

  // Metodos
  get getHistorial(): string[] {
    return [...this.historial];
  }

  buscarGif(query: string): void {
    // Normaliza la buscqueda
    query = query.trim().toLowerCase();

    // Evita el historial con elementos duplicados
    if (this.historial.includes(query)) {
      return;
    }

    this.historial.unshift(query);

    // Se limita la lista a 10. (Cuando se agrega el 11, se elimina el ultimo)
    this.historial = this.historial.splice(0, 10);

    this.http
      .get(
        'https://api.giphy.com/v1/gifs/search?api_key=TLW0vMP2XfbikRmowavXJhaUjYWGtfCZ&q=sword art online&limit=10'
      )
      .subscribe((resp: any) => console.log(resp.data));
  }
}
