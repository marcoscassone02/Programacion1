import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-nav-catalogo',
  templateUrl: './nav-catalogo.component.html',
  styleUrl: './nav-catalogo.component.css'
})
export class NavCatalogoComponent {
  constructor(
    private authService: AuthService
  ){}
get isToken() {
  return localStorage.getItem('token');
}
cerrarSesion(){
  this.authService.logout();
}
}