import { Component } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service'; 
@Component({
  selector: 'app-ver-carrito',
  templateUrl: './ver-carrito.component.html',
  styleUrls: ['./ver-carrito.component.css']
})
export class VerCarritoComponent {
get isToken(){
   return localStorage.getItem('token');
}

arrayLibros:any[] = [];
constructor(private cartService:CarritoService) {
  this.arrayLibros = this.cartService.getCart();
}

DelCart(book: any) {
  if (confirm("¿Estás seguro de que deseas eliminar este libro del carrito?")) {
    this.cartService.DelCart(book);
    this.arrayLibros = this.cartService.getCart(); // Actualiza el array de libros después de eliminar
  }
}

}


