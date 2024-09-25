import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.css'
})
export class SubmitButtonComponent {
  
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
      this.headerTitle = 'Sign Up'
    };
    if (this.headerTitle === 'change-password') {
      this.headerTitle = 'Change'
    };


    if (!this.headerTitle || this.headerTitle === 'forgot-password') {
      this.headerTitle = 'Send'; // Texto por defecto si no hay segmento
    }
}
}
