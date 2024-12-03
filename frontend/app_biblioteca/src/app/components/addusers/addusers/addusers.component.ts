import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrl: './addusers.component.css'
})
export class AddusersComponent {
  @Input() userForm!: FormGroup;
  @Input() userId!: number; // El ID del user en caso de que estemos editando

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private modifieduserService: UsuariosService,
  ) {}

  // Acción para agregar o editar un libro
  accionEdituser() {
    if (this.userForm.valid) {
      const dataRegister = this.userForm.value;

      if (this.userId) {
        this.modifieduserService.updateUser(this.userId, dataRegister).subscribe({
          next: (rta: any) => {
            console.log('Usuario actualizado con éxito: ', rta);
            this.router.navigateByUrl('usuarios');
          },
          error: (err: any) => {
            alert('Hubo un error al editar el usuario, por favor intente nuevamente.');
            console.log('Error: ', err);
          }
        });
      } 
    }
  }
}
