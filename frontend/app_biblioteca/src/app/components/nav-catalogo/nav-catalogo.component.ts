import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { LibrosService } from '../../services/libros.service';
import { VerCatalogoComponent } from '../catalogo/ver-catalogo/ver-catalogo.component'
import { FormsModule }  from '@angular/forms';
@Component({
  selector: 'app-nav-catalogo',
  templateUrl: './nav-catalogo.component.html',
  styleUrl: './nav-catalogo.component.css'
})
export class NavCatalogoComponent {
  terminoBusqueda: string = '';
  constructor(
    private authService: AuthService,
    private librosService: LibrosService,
    // private verCatalogo: VerCatalogoComponent
  ){}

get isToken() {
  return localStorage.getItem('token');
}
get isAdmin() {
  return this.authService.getRole() === 'admin';
}
cerrarSesion(){
  this.authService.logout();
}

enviarBusqueda() {
  this.librosService.setBusqueda(this.terminoBusqueda);
}



enviarGenero(genero: string = "") {
  this.librosService.setGenero(genero);

}
}



