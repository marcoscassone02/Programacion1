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

  constructor(
    private router: Router,
    private librosService: LibrosadminService,
    
  ){

  } 

  ngOnInit() {
    this.librosService.getLibrosadmin().subscribe((rta:any) => {
      console.log('libros api: ',rta);
      this.arrayLibrosAdmin = rta.libros || [];
    })
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
}
