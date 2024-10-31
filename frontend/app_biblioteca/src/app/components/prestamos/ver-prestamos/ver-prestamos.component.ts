import { Component, OnInit } from '@angular/core';
import { PrestamosService } from '../../../services/prestamos.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class VerPrestamosComponent implements OnInit {
  prestamos: any[] = [];
  usuarioId: number | null = null;

  constructor(private prestamosService: PrestamosService) {}

  ngOnInit(): void {
    // Obtén el usuario_id desde localStorage (o el servicio que utilices para autenticación)
    const usuarioIdString = localStorage.getItem('usuario_id');
    this.usuarioId = usuarioIdString ? +usuarioIdString : null;

    if (this.usuarioId !== null) {
      // Llama al servicio para obtener los préstamos por usuario_id
      this.prestamosService.getPrestamosByUsuarioId(this.usuarioId).subscribe(
        (data: any) => {
          this.prestamos = data;
        },
        error => {
          console.error('Error al obtener préstamos:', error);
        }
      );
    } else {
      console.error('usuario_id no encontrado en localStorage');
    }
  }
}


