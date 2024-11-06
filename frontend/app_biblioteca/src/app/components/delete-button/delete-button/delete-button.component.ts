import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosadminService } from '../../../services/librosadmin.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.css'
})
export class DeleteButtonComponent {

  headerTitle: string = 'admin-view';

  constructor(
    private router: Router,
    private librosService: LibrosadminService
  ){

  }
  ngOnInit(): void {
    this.setHeaderTitle();
  }

  setHeaderTitle() {
    const currentRoute = this.router.url; // Obtiene la ruta actual
      const segments = currentRoute.split('/'); // Divide la ruta en segmentos
      this.headerTitle = segments[segments.length - 1]; // Toma el último segmento
      if (this.headerTitle === 'admin-lista-libros') {
        this.headerTitle = 'Book'
      };
      if (this.headerTitle === 'usuarios') {
        this.headerTitle = 'User'
      };
      if (this.headerTitle === 'prestamos-bibliotecario') {
        this.headerTitle = 'Loan'
      };
  
  
  }

}
