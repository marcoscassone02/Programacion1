import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PrestamosService } from '../../services/prestamos.service';

@Component({
  selector: 'app-addprestamo',
  templateUrl: './addprestamo.component.html',
  styleUrl: './addprestamo.component.css'
})
export class AddprestamoComponent {
  @Input() prestamoForm!: FormGroup;
  @Input() prestamoId!: number; // El ID del user en caso de que estemos editando

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private modifieduserService: PrestamosService,
  ) {}

  // Acción para agregar o editar un libro
  accionEditPrestamo() {
    if (this.prestamoForm.valid) {
      const dataRegister = this.prestamoForm.value;

      if (this.prestamoId) {
        this.modifieduserService.updatePrestamo(this.prestamoId, dataRegister).subscribe({
          next: (rta: any) => {
            console.log('Prestamo actualizado con éxito: ', rta);
            this.router.navigateByUrl('prestamos-bibliotecario');
          },
          error: (err: any) => {
            alert('Hubo un error al editar el prestamo, por favor intente nuevamente.');
            console.log('Error: ', err);
          }
        });
      } 
    }
  }

}
