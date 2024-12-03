import { Component, OnInit } from '@angular/core';
import { PrestamosService } from '../../../services/prestamos.service';
<<<<<<< HEAD

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
=======
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-ver-prestamos',
  templateUrl: './ver-prestamos.component.html',
  styleUrls: ['./ver-prestamos.component.css']
})
export class VerPrestamosComponent implements OnInit {
  allPrestamos: any[] = []; // Almacena todos los préstamos
  arrayPrestamos: any[] = []; // Almacena los préstamos paginados
  page: number = 1;
  perPage: number = 2;
  totalPrestamos: number = 0;
  cantidadDePaginas: number = 0;

  constructor(private prestamoservice: PrestamosService, private authservice: AuthService) {}

  ngOnInit(): void {
    this.getPrestamos();
  }

  getPrestamos(): void {
    this.prestamoservice.getPrestamos().subscribe((rta: any) => {
      console.log('prestamos: ', rta);
      const userId = this.authservice.getUserId();
      this.allPrestamos = (rta.prestamos || []).filter((prestamo: any) => prestamo.usuario_id === userId);

      // Actualizar total de préstamos y calcular cantidad de páginas
      this.totalPrestamos = this.allPrestamos.length;
      this.cantidadDePaginas = Math.ceil(this.totalPrestamos / this.perPage);

      // Obtener los préstamos de la página actual
      this.paginarPrestamos();
    });
  }

  paginarPrestamos(): void {
    const startIndex = (this.page - 1) * this.perPage;
    const endIndex = startIndex + this.perPage;
    this.arrayPrestamos = this.allPrestamos.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.page < this.cantidadDePaginas) {
      this.page++;
      this.paginarPrestamos();
    }
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.paginarPrestamos();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.cantidadDePaginas) {
      this.page = page;
      this.paginarPrestamos();
    }
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.cantidadDePaginas }, (_, i) => i + 1);
>>>>>>> EmilianoMassolin
  }
}


