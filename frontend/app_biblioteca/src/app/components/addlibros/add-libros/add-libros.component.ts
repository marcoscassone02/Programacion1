import { Component, Input } from '@angular/core';
import { LibrosService } from '../../../services/libros.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-libros',
  templateUrl: './add-libros.component.html',
  styleUrl: './add-libros.component.css'
})
export class AddLibrosComponent {
  @Input() bookForm!: FormGroup;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registerbookService: LibrosService   
  ){

  }
  accionAddbook() {
    if (this.bookForm.valid) {
      const dataRegister = this.bookForm.value;
  
      this.registerbookService.registerbook(dataRegister).subscribe({
        next: (rta: any) => {
          console.log('Exito: ', rta);
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

