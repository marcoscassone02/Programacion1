import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  headerTitle: string = 'Login'; // Valor por defecto

  constructor(private router: Router) {}
ngOnInit(): void {
  this.setHeaderTitle();
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
}
}