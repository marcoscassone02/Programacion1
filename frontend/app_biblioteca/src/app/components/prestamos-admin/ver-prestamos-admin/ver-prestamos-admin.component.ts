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
  page: number = 1;
  perPage: number = 2;
  totalLibros: number = 0;
  cantidadDePaginas: number = Math.ceil(this.totalLibros/this.perPage)


  constructor(
    private router: Router,
    private prestamosService: PrestamosService
  ){

  } 

  ngOnInit() {
    this.getprestamos()
  }
  getprestamos(): void {
    this.prestamosService.getPrestamos(this.page, this.perPage).subscribe((res: any) => {
      this.arrayPrestamosAdmin = res.prestamos;
      this.totalLibros = res.total;
      this.cantidadDePaginas = Math.ceil(this.totalLibros / this.perPage);
    });
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
  nextPage(): void {
    if (this.page * this.perPage < this.totalLibros) {
      this.page++;
    }
    this.getprestamos()
  }

  getPagesArray(): number[] {
  return Array.from({ length: this.cantidadDePaginas }, (_, i) => i + 1);
}

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
    }
    this.getprestamos()
  }
  goToPage(page: number): void {
    this.page = page;
    this.getprestamos()
    
  }
}
