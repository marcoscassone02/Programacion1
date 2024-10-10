import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class authsessionGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const userRole = this.authService.getRole();

    if (userRole === 'admin') {
      return true;
    } else if (userRole === 'user') {
      this.router.navigate(['/catalogo']);
      return false;
    } else {
      this.router.navigate(['/catalogo']);
      return false;
    }
  }
}