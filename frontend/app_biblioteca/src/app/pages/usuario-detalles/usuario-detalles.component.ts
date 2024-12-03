import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrl: './usuario-detalles.component.css'
})
export class UsuarioDetallesComponent implements OnInit {
  userForm!: FormGroup;
  userId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private useradmin: UsuariosService
  ) {
    this.userForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.nullValidator],
      rol: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Recibir los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.userId = params['id'];  // Obtener el ID del usuario
      if (this.userId) {
        this.loadUserData(this.userId);
      }
    });
  }

  loadUserData(userId: number) {
      this.useradmin.getUserById(userId).subscribe(user => {
        this.userForm.patchValue({
          nombre: user.nombre,
          apellido: user.apellido,
          correo: user.correo,
          telefono: user.telefono,
          rol: user.rol,
        });
      });
    }
}

