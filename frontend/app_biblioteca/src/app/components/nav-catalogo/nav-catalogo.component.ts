import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { LibrosService } from '../../services/libros.service';
@Component({
  selector: 'app-nav-catalogo',
  templateUrl: './nav-catalogo.component.html',
  styleUrl: './nav-catalogo.component.css'
})
export class NavCatalogoComponent {
  
  constructor(
    private authService: AuthService,
    private librosService: LibrosService
  ){}
get isToken() {
  return localStorage.getItem('token');
}
cerrarSesion(){
  this.authService.logout();
}


enviarGenero(genero: string) {
  this.librosService.setGenero(genero).subscribe(data => {
    console.log('Libros actualizados:', data);
  
  });
}


}
