import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ValidarTokenGuard implements CanActivate, CanLoad {
  // Constructor
  constructor(private authService: AuthService, private router: Router) {}

  // Can's
  canActivate(): Observable<boolean> | boolean {
    return this.authService
      .validarToken()
      .pipe(
        tap((valid) => (valid ? null : this.router.navigateByUrl('/auth')))
      );
  }

  canLoad(): Observable<boolean> | boolean {
    return this.authService
      .validarToken()
      .pipe(
        tap((valid) => (valid ? null : this.router.navigateByUrl('/auth')))
      );
  }
}
