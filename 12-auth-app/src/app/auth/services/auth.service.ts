import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Atributos
  private baseUrl: string = environment.baseUrl;
  private usuario!: Usuario;

  get getUsuario() {
    return { ...this.usuario };
  }

  // Constructor
  constructor(private http: HttpClient) {}

  // Metodos
  login(email: string, password: string) {
    const url = `${this.baseUrl}/auth`;
    const body = {
      email,
      password,
    };

    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) =>
        resp.ok ? (this.usuario = { name: resp.name!, uid: resp.uid! }) : null
      ),
      map((resp) => resp.ok),
      catchError((err) => of(false))
    );
  }
}
