import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Atributos
  endpoint: string = `${environment.baseUrl}/usuarios/1`;
  private auth: Auth | undefined;

  // Constructor
  constructor(private http: HttpClient) {}

  // Metodos

  login(): Observable<Auth> {
    return this.http
      .get<Auth>(this.endpoint)
      .pipe(tap((auth) => (this.auth = auth)));
  }

  get getAuth(): Auth {
    return { ...this.auth! };
  }
}
