import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LibrosadminService } from '../../services/librosadmin.service';

@Component({
  selector: 'app-libro-detalles',
  templateUrl: './libro-detalles.component.html',
  styleUrls: ['./libro-detalles.component.css']
})
export class LibroDetallesComponent implements OnInit {
  bookForm!: FormGroup;
  bookId: number | null = null;
  isEditMode: boolean = false;  // Indicador para el modo de edición

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private librosadmin: LibrosadminService
  ) {
    this.bookForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      descripcion: ['', Validators.required],
      editorial: ['', Validators.nullValidator],
      idioma: ['', Validators.nullValidator],
      publicacion: ['', Validators.nullValidator],
      portada: ['', Validators.required],
      autor:["",Validators.required]
    });
  }

  ngOnInit() {
    // Recibir los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.bookId = params['id'];  // Obtener el ID del libro
      this.isEditMode = params['isEditMode'] === 'true';  // Determinar si estamos en modo de edición

      if (this.bookId) {
        this.loadBookData(this.bookId);
      }
    });
  }

  loadBookData(bookId: number) {
    // Si estamos editando, cargamos los datos del libro
    if (this.isEditMode) {
      this.librosadmin.getBookById(bookId).subscribe(book => {
        this.bookForm.patchValue({
          nombre: book.nombre,
          genero: book.genero,
          descripcion: book.descripcion,
          editorial: book.editorial,
          idioma: book.idioma,
          publicacion: book.publicacion,
          portada: book.portada,
          autor:book.autor
        });
      });
    }
  }
}

