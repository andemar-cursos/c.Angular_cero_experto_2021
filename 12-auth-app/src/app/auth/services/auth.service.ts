import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Atributos
  private baseUrl: string = environment.baseUrl;

  // Constructor
  constructor(private http: HttpClient) {}

  // Metodos
  login(email: string, password: string): Observable<AuthResponse> {
    const url = `${this.baseUrl}/auth`;
    const body = {
      email,
      password,
    };

    return this.http.post<AuthResponse>(url, body);
  }
}
