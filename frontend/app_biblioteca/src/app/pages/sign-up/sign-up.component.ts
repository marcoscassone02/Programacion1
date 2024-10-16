import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  registerForm!: FormGroup;



  constructor(
    private formBuilder: FormBuilder  
  ){
    this.registerForm = this.formBuilder.group(
    {
      correo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
     contraseña: ['', Validators.required],

     telefono: ['', Validators.nullValidator],
     rol: ['', Validators.nullValidator]
    }
    )

  }
}