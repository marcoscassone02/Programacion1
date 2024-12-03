import { Component, OnInit } from '@angular/core';
import { PrestamosService } from '../../services/prestamos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-prestamo-detalles',
  templateUrl: './prestamo-detalles.component.html',
  styleUrl: './prestamo-detalles.component.css'
})
export class PrestamoDetallesComponent implements OnInit {
  prestamoForm!: FormGroup;
  prestamoId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private prestamoadmin: PrestamosService
  ) {
    this.prestamoForm = this.formBuilder.group({
      fecha_prestamo: ['', Validators.required],
      fecha_devolucion: ['', Validators.required],
      estado: ['', Validators.required],
      libro_id: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Recibir los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.prestamoId = params['id'];  // Obtener el ID del usuario
      if (this.prestamoId) {
        this.loadUserData(this.prestamoId);
      }
    });
  }

  loadUserData(prestamoId: number) {
      this.prestamoadmin.getUserById(prestamoId).subscribe(prestamo => {
        this.prestamoForm.patchValue({
          fecha_prestamo: prestamo.fecha_prestamo,
          fecha_devolucion: prestamo.fecha_devolucion,
          estado: prestamo.estado,
          libro_id: prestamo.libro_id,
        });
      });
    }

}
