import { Component } from '@angular/core';
import { LibrosService } from '../../../services/libros.service';
import { CarritoService } from '../../../services/carrito.service'; 
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-ver-catalogo',
  templateUrl: './ver-catalogo.component.html',
  styleUrl: './ver-catalogo.component.css'
})
export class VerCatalogoComponent {
  //arrayLibros= [
  //  {
  //    id:1,
  //    nombre: 'El principito',
  //    descripcion: 'El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry',
  //    autor: 'Antoine de Saint-Exupéry',
  //  
  //  },
  

  arrayLibros:any[] = [];
  page: number = 1;
  perPage: number = 2;
  // genero: string = ''
  totalLibros: number = 0;
  cantidadDePaginas: number = Math.ceil(this.totalLibros/this.perPage)

  constructor(private librosService: LibrosService,private cartService:CarritoService, private authservice: AuthService) {}
  ngOnInit() {
    this.getLibros()

    this.librosService.generoObservable.subscribe((nuevoGenero: string) => {
        this.getLibros();  // Llamar a getLibros cuando cambia el género
    })
    this.librosService.terminoBusquedaObservable.subscribe((nuevaBusqueda: string) => {
        this.getLibros();  // Llamar a getLibros cuando cambia la búsqueda
    })
    ;
    
     
  }
  addToCart(book: any) {
    this.cartService.addToCart(book);
    console.log('Libro agregado al carrito:', book);
  }
  getLibros(): void {
    this.librosService.getLibros(this.page, this.perPage, this.librosService.getGenero(), this.librosService.getBusqueda()).subscribe((res: any) => {
      this.arrayLibros = res.libros;
      this.totalLibros = res.total;
      this.cantidadDePaginas = Math.ceil(this.totalLibros / this.perPage);
  
      this.arrayLibros.forEach(libro => {
        if (libro.valoraciones && libro.valoraciones.length > 0) {
          const totalValoraciones = libro.valoraciones.reduce((sum: number, valoracion: any) => sum + valoracion.valoracion, 0);
          libro.promedioValoracion = (totalValoraciones / libro.valoraciones.length).toFixed(2); // Redondear a 2 decimales
        } else {
          libro.promedioValoracion = 'Sin valoraciones'; // Si no hay valoraciones
        }
      });
    });
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

  submitValoracion(libro: any, index: number): void {
    // Verificar que la valoración esté en el rango 1-5
    const valoracion = libro.valoracionUsuario;
    if (valoracion >= 1 && valoracion <= 5) {
      
      const userId = this.authservice.getUserId();
      
      // Asegurarse de que el usuarioId esté presente
      if (!userId) {
        alert('No se pudo obtener el ID de usuario. Por favor, inicia sesión.');
        return;
      }
  
      // Crear el objeto de datos para registrar la valoración
      const dataRegister = {
        libro_id: libro.id,
        usuario_id: userId,  // Agregar el usuarioId
        valoracion: valoracion
      };
  
      // Llamar al servicio para registrar la valoración
      this.librosService.registervaloracion(dataRegister).subscribe(
        (response) => {
          console.log('Valoración enviada:', response);
          // Actualizar el promedio de valoración del libro
          this.actualizarPromedioValoracion(libro);
        },
        (error) => {
          console.error('Error al enviar la valoración:', error);
        }
      );
    } else {
      alert('Por favor, ingresa un número entre 1 y 5');
    }
  }

  actualizarPromedioValoracion(libro: any): void {
    // Recalcular el promedio de valoraciones
    if (libro.valoraciones && libro.valoraciones.length > 0) {
      const totalValoraciones = libro.valoraciones.reduce((sum: number, valoracion: any) => sum + valoracion.valoracion, 0);
      libro.promedioValoracion = (totalValoraciones / libro.valoraciones.length).toFixed(2); // Redondear a 2 decimales
    } else {
      libro.promedioValoracion = 'Sin valoraciones';
    }
  }
  

}
