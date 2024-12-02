import { Component } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service'; 
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ver-carrito',
  templateUrl: './ver-carrito.component.html',
  styleUrls: ['./ver-carrito.component.css']
})
export class VerCarritoComponent {
get isToken(){
   return localStorage.getItem('token');

}
get isArrayLibros(){
  return this.arrayLibros.length > 0;
}

arrayLibros:any[] = [];
userid:any;
constructor(private cartService:CarritoService, private http: HttpClient,private authService: AuthService) { 
  this.arrayLibros = this.cartService.getCart();
  this.userid = this.authService.getUserId();
}

DelCart(book: any) {
  if (confirm("¿Estás seguro de que deseas eliminar este libro del carrito?")) {
    this.cartService.DelCart(book);
    this.arrayLibros = this.cartService.getCart(); // Actualiza el array de libros después de eliminar
  }
}
ver(){
  console.log(this.userid);
  console.log(this.arrayLibros);
  const librosIds = this.arrayLibros.map(libro => libro.id); // Obtén los IDs de los libros seleccionados
  console.log(librosIds);
}


agregarPrestamo() {
  const librosIds = this.arrayLibros.map(libro => libro.id); // Obtén los IDs de los libros seleccionados

  librosIds.forEach(id => {
    // Obtén la fecha actual para el préstamo
    const fechaPrestamo = this.formatoFecha(new Date());

    // Calcula la fecha de devolución (por ejemplo, 7 días después del préstamo)
    const fechaDevolucion = new Date();
    fechaDevolucion.setDate(fechaDevolucion.getDate() + 7); // Ejemplo: devolución en 7 días
    const fechaDevolucionFormateada = this.formatoFecha(fechaDevolucion);

    // Prepara los datos para crear el préstamo
    const dataPrestamo = {
      fecha_prestamo: fechaPrestamo,
      fecha_devolucion: fechaDevolucionFormateada,
      estado: 'Pendiente', // Estado inicial del préstamo
      usuario_id: this.userid, // Sustituye con el ID del usuario real
      libro_id: id 
    };

    // Llama al servicio para crear el préstamo usando createPrestamo
    this.cartService.createPrestamo(dataPrestamo).subscribe({
      next: response => {
        console.log('Préstamo agregado correctamente', response);
        // Lógica adicional después de agregar el préstamo, si es necesario
        this.arrayLibros = []; 
        this.cartService.cleanCart();
      // Limpiar el carrito después de agregar el préstamo
      console.log('Carrito limpiado:', this.arrayLibros);
      },
      error: error => {
        console.error('Error al agregar préstamo', error);
        // Manejo de errores
      }
    });
  });
}

// Función para formatear la fecha a YYYY-MM-DD
formatoFecha(fecha: Date): string {
  const year = fecha.getFullYear();
  const month = this.padLeft(fecha.getMonth() + 1, 2); // Suma 1 porque getMonth() devuelve meses de 0 a 11
  const day = this.padLeft(fecha.getDate(), 2);
  return `${year}-${month}-${day}`;
}

// Función auxiliar para rellenar con ceros a la izquierda
padLeft(num: number, size: number): string {
  let s = num.toString();
  while (s.length < size) s = '0' + s;
  return s;
}

}





