import { Component, importProvidersFrom, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.css'
})
export class SubmitButtonComponent {
  @Input() loginForm!: FormGroup;
  // loginForm!: FormGroup;
  headerTitle: string = 'Login'; // Valor por defecto

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder  
  ){

  }
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
accionBoton(dataLogin:any){
  if (this.headerTitle === 'login') {
  this.authService.login(dataLogin).subscribe({
    next: (rta:any) => {
      console.log('Exito: ', rta);
      localStorage.setItem('token', rta.access_token);
      this.router.navigateByUrl('catalogo');
    }, error: (err:any)=>{
      alert('Credenciales incorrectas, Porfavor intente nuevamente.'),
      console.log('Error: ', err);
      localStorage.removeItem('token');
    }, complete: ()=>{
      console.log('Completado');
    }
  })
}
}


accionBoton2(){
  if (this.loginForm.valid){
    console.log('Datos: ',this.loginForm.value)
    this.accionBoton(this.loginForm.value)
  }
  else {
    alert('Porfavor ingrese los datos requeridos.')
  }
  
}




}
