import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private formBuilder: FormBuilder  
  ){
    this.loginForm = this.formBuilder.group(
    {
      correo: ['', Validators.required],
     contraseña: ['', Validators.required]
    }
    )

  }
  
}
