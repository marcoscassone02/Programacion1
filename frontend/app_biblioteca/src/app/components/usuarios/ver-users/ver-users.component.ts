import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service'

@Component({
  selector: 'app-ver-users',
  templateUrl: './ver-users.component.html',
  styleUrl: './ver-users.component.css'
})
export class VerUsersComponent {


  arrayUsuarios:any[] = []

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ){

  } 

  ngOnInit() {
    this.usuariosService.getUsers().subscribe((rta:any) => {
      console.log('usuarios api: ',rta);
      this.arrayUsuarios = rta.usuarios || [];
    })
  }
  deleteUser(userId: number) {
    if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      this.usuariosService.deleteUser(userId).subscribe({
        next: (rta: any) => {
          console.log('Usuario eliminado con éxito:', rta);
          window.location.reload();
        },
        error: (err: any) => {
          alert('Hubo un error al eliminar el usuario. Por favor, intente nuevamente.');
          console.log('Error:', err);
        }
      });
    }
  }



}

