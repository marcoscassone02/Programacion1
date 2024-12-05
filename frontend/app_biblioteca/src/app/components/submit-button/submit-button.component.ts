import { Component, importProvidersFrom, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.css'
})
export class SubmitButtonComponent {
  @Input() loginForm!: FormGroup;
  @Input() registerForm!: FormGroup;
  headerTitle: string = 'Login'; // Valor por defecto

  constructor(
    private router: Router,
    private authService: AuthService,
    private registerService: RegisterService,
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
accionLogin(dataLogin:any){
  if (this.headerTitle === 'login') {
  this.authService.login(dataLogin).subscribe({
    next: (rta:any) => {
      console.log('Exito: ', rta);
      localStorage.setItem('token', rta.access_token);
      localStorage.setItem('usuario_id', rta.id);
      this.router.navigateByUrl('catalogo');
    }, error: (err:any)=>{
      alert('Credenciales incorrectas, Porfavor intente nuevamente.'),
      console.log('Error: ', err);
      localStorage.removeItem('token');
      localStorage.removeItem('usuario_id');
    }, complete: ()=>{
      console.log('Completado');
    }
  })
}
}
accionRegister(dataRegister:any){
  if (this.headerTitle === 'Sign Up') {
  this.registerService.register(dataRegister).subscribe({
    next: (rta:any) => {
      console.log('Exito: ', rta);
      this.router.navigateByUrl('login');
    }, error: (err:any)=>{
      alert('Hubo un error, Porfavor intente nuevamente.'),
      console.log('Error: ', err);

    }, complete: ()=>{
      console.log('Completado');
    }
  })
}
}



botonMultiAccion(){
  if (this.headerTitle === 'login'){
    if (this.loginForm.valid){
      console.log('Datos: ',this.loginForm.value)
      this.accionLogin(this.loginForm.value)
    }
    else {
      alert('Porfavor ingrese los datos requeridos.')
      localStorage.removeItem('token');
    }
  }
  if (this.headerTitle === 'Sign Up'){
    if (this.registerForm.valid){
      console.log('Datos: ',this.registerForm.value)
      this.accionRegister(this.registerForm.value)
    }
    else {
      alert('Porfavor ingrese los datos requeridos.')}
    }
 }
}





