import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Atributos
  endpoint: string = `${environment.baseUrl}/usuarios/1`;

  // Constructor
  constructor(private http: HttpClient) {}

  // Metodos

  login(): Observable<Auth> {
    return this.http.get<Auth>(this.endpoint);
  }
}
