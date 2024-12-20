import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-nav-volver',
  templateUrl: './nav-volver.component.html',
  styleUrl: './nav-volver.component.css'
})
export class NavVolverComponent implements OnInit { 
  

    headerTitle: string = 'Login'; // Valor por defecto
    terminoBusqueda: string = '';
  
    constructor(
      private router: Router, 
      private location: Location,
      private UsuariosService: UsuariosService,
    ) {}
  
    ngOnInit(): void {
    this.setHeaderTitle();
  }

  hasSearchBar(){
    return this.headerTitle === 'usuarios'
  }

  goBack() {
    this.location.back(); 
  }

  enviarBusqueda() {
    this.UsuariosService.setBusqueda(this.terminoBusqueda);
  }
  
  setHeaderTitle() {
    const currentRoute = this.router.url; // Obtiene la ruta actual
      const segments = currentRoute.split('/'); // Divide la ruta en segmentos
      this.headerTitle = segments[segments.length - 1]; // Toma el último segmento
      if (this.headerTitle === 'sign-up') {
        this.headerTitle = 'Register'
      };
      if (!this.headerTitle) {
        this.headerTitle = 'Página Desconocida'; // Texto por defecto si no hay segmento
      }
      ;
      if (this.headerTitle === 'carrito') {
        this.headerTitle = 'Carrito'
      }
      ;
      if (this.headerTitle === 'admin-view') {
        this.headerTitle = 'Administrador'
      }      ;
      if (this.headerTitle === 'usuario-detalles') {
        this.headerTitle = 'Detalles usuario'
      }      ;
      if (this.headerTitle === 'prestamos-bibliotecario') {
        this.headerTitle = 'Prestamos'
      }
      if (this.headerTitle === 'reserva-detalles') {
        this.headerTitle = 'Detalles reserva'
      }
      if (this.headerTitle === 'admin-lista-libros') {
        this.headerTitle = 'Libros'
      }
      if (this.headerTitle === 'libro-detalles') {
        this.headerTitle = 'Libro'
      }
      if (this.headerTitle === 'prestamos') {
        this.headerTitle = 'Prestamos'
      }
      const libroDetallesEditRegex = /libro-detalles\?id=\d+&isEditMode=true/;
      if (libroDetallesEditRegex.test(currentRoute)) {
        this.headerTitle = 'Editar libro';
      }
      const userDetallesEditRegex = /usuario-detalles\?id=\d/;
      if (userDetallesEditRegex.test(currentRoute)) {
        this.headerTitle = 'Editar usuario';
      }
      const prestamoDetallesEditRegex = /prestamo-detalles\?id=\d/;
      if (prestamoDetallesEditRegex.test(currentRoute)) {
        this.headerTitle = 'Editar prestamo';
      }
  }
}
