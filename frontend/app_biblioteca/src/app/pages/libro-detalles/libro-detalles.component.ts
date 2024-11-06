import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-libro-detalles',
  templateUrl: './libro-detalles.component.html',
  styleUrl: './libro-detalles.component.css'
})
export class LibroDetallesComponent {
  bookForm!: FormGroup;



  constructor(
    private formBuilder: FormBuilder  
  ){
    this.bookForm = this.formBuilder.group(
    {
      descripcion: ['', Validators.required],
      editorial: ['', Validators.nullValidator],
      genero: ['', Validators.required],
     idioma: ['', Validators.nullValidator],
     nombre: ['', Validators.required],
     publicacion: ['', Validators.nullValidator]
    }
    )

  }

}
