import { Component, Input } from '@angular/core';
import { LibrosService } from '../../../services/libros.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrosadminService } from '../../../services/librosadmin.service';

@Component({
  selector: 'app-add-libros',
  templateUrl: './add-libros.component.html',
  styleUrl: './add-libros.component.css'
})
export class AddLibrosComponent {
  @Input() bookForm!: FormGroup;
  @Input() isEditMode: boolean = false;  // Determina si estamos editando un libro

  @Input() bookId!: number; // El ID del libro en caso de que estemos editando

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registerbookService: LibrosService,
    private modifiedbookService: LibrosadminService
  ) {}

  // Acción para agregar o editar un libro
  accionAddbook() {
    if (this.bookForm.valid) {
      const dataRegister = this.bookForm.value;

      if (this.isEditMode && this.bookId) {
        // Si estamos en modo de edición, llamamos al método de actualización
        this.modifiedbookService.updateBook(this.bookId, dataRegister).subscribe({
          next: (rta: any) => {
            console.log('Libro actualizado con éxito: ', rta);
            this.router.navigateByUrl('admin-lista-libros');
          },
          error: (err: any) => {
            alert('Hubo un error al editar el libro, por favor intente nuevamente.');
            console.log('Error: ', err);
          }
        });
      } else {
        
        // Si estamos en modo de agregar, llamamos al método de registro
        this.registerbookService.registerbook(dataRegister).subscribe({
          next: (rta: any) => {
            console.log('Libro agregado con éxito: ', rta);
            this.router.navigateByUrl('admin-lista-libros');
          },
          error: (err: any) => {
            alert('Hubo un error, por favor intente nuevamente.');
            console.log('Error: ', err);
          }
        });
      }
    }
  }
}


