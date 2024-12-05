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
  page: number = 1;
  perPage: number = 2;
  totalLibros: number = 0;
  cantidadDePaginas: number = Math.ceil(this.totalLibros/this.perPage)

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ){

  } 

  ngOnInit() {
   this.getUsers()
   this.usuariosService.terminoBusquedaObservable.subscribe((nuevaBusqueda: string) => {
    this.getUsers();  // Llamar a getLibros cuando cambia la búsqueda
})
  }
  getUsers(): void {
    this.usuariosService.getUsers(this.page, this.perPage,this.usuariosService.getBusqueda()).subscribe((res: any) => {
      this.arrayUsuarios = res.usuarios;
      this.totalLibros = res.total;
      this.cantidadDePaginas = Math.ceil(this.totalLibros / this.perPage);
    });
  }

  goToUserDetalles(userId: number) {
    this.router.navigate(['/usuario-detalles'], { queryParams: { id: userId} });
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
  nextPage(): void {
    if (this.page * this.perPage < this.totalLibros) {
      this.page++;
    }
    this.getUsers()
  }

  getPagesArray(): number[] {
  return Array.from({ length: this.cantidadDePaginas }, (_, i) => i + 1);
}

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
    }
    this.getUsers()
  }
  goToPage(page: number): void {
    this.page = page;
    this.getUsers()
    
  }



}

