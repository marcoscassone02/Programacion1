import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosadminService } from '../../../services/librosadmin.service'

@Component({
  selector: 'app-ver-librosadmin',
  templateUrl: './ver-librosadmin.component.html',
  styleUrl: './ver-librosadmin.component.css'
})
export class VerLibrosadminComponent {
  @Input() isEditMode: boolean = false;
  
  arrayLibrosAdmin:any[] = []
  page: number = 1;
  perPage: number = 2;
  totalLibros: number = 0;
  cantidadDePaginas: number = Math.ceil(this.totalLibros/this.perPage)

  constructor(
    private router: Router,
    private librosService: LibrosadminService,
    
  ){

  } 

  ngOnInit() {
    this.getLibros()
  }
  getLibros(): void {
    this.librosService.getLibrosadmin(this.page, this.perPage).subscribe((res: any) => {
      this.arrayLibrosAdmin = res.libros;
      this.totalLibros = res.total;
      this.cantidadDePaginas = Math.ceil(this.totalLibros / this.perPage);
    });
  }

  goToLibroDetalles(bookId: number) {
    this.router.navigate(['/libro-detalles'], { queryParams: { id: bookId, isEditMode: true } });
  }

  accionDeleteBook(bookId: number) {
    if (confirm("¿Estás seguro de que deseas eliminar este libro?")) {
        this.librosService.deleteBook(bookId).subscribe({
            next: (rta: any) => {
                console.log('Libro eliminado con éxito:', rta);
                window.location.reload();
            },
            error: (err: any) => {
                alert('Hubo un error al eliminar el libro. Por favor, intente nuevamente.');
                console.log('Error:', err);
            }
        });
    }
  }
  nextPage(): void {
    if (this.page * this.perPage < this.totalLibros) {
      this.page++;
    }
    this.getLibros()
  }

  getPagesArray(): number[] {
  return Array.from({ length: this.cantidadDePaginas }, (_, i) => i + 1);
}

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
    }
    this.getLibros()
  }
  goToPage(page: number): void {
    this.page = page;
    this.getLibros()
    
  }
}
