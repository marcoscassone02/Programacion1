import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrestamosService } from '../../../services/prestamos.service'

@Component({
  selector: 'app-ver-prestamos-admin',
  templateUrl: './ver-prestamos-admin.component.html',
  styleUrl: './ver-prestamos-admin.component.css'
})
export class VerPrestamosAdminComponent {
  

  arrayPrestamosAdmin:any[] = []

  constructor(
    private router: Router,
    private prestamosService: PrestamosService
  ){

  } 

  ngOnInit() {
    this.prestamosService.getPrestamos().subscribe((rta:any) => {
      console.log('prestamos api: ',rta);
      this.arrayPrestamosAdmin = rta.prestamos || [];
    })
  }
  accionDeleteBook(prestamoId: number) {
    if (confirm("¿Estás seguro de que deseas eliminar este prestamo?")) {
        this.prestamosService.deletePrestamos(prestamoId).subscribe({
            next: (rta: any) => {
                console.log('Prestamo eliminado con éxito:', rta);
                window.location.reload();
            },
            error: (err: any) => {
                alert('Hubo un error al eliminar el prestamo. Por favor, intente nuevamente.');
                console.log('Error:', err);
            }
        });
    }
  }
  goToUserDetalles(prestamoId: number) {
    this.router.navigate(['/prestamo-detalles'], { queryParams: { id: prestamoId} });
  }
}
