import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { LibrosService } from '../../services/libros.service';
import { VerCatalogoComponent } from '../catalogo/ver-catalogo/ver-catalogo.component'
@Component({
  selector: 'app-nav-catalogo',
  templateUrl: './nav-catalogo.component.html',
  styleUrl: './nav-catalogo.component.css'
})
export class NavCatalogoComponent {
  
  constructor(
    private authService: AuthService,
    private librosService: LibrosService,
    // private verCatalogo: VerCatalogoComponent
  ){}

get isToken() {
  return localStorage.getItem('token');
}
cerrarSesion(){
  this.authService.logout();
}



enviarGenero(genero: string) {
  this.librosService.setGenero(genero);

}
}



