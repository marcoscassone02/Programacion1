import { Component } from '@angular/core';
import { CartService } from '../../../services/carrito.service'; 
@Component({
  selector: 'app-ver-carrito',
  templateUrl: './ver-carrito.component.html',
  styleUrls: ['./ver-carrito.component.css']
})
export class VerCarritoComponent {
get isToken(){
   return localStorage.getItem('token');
}
//  arrayLibros= [
//{
//  id:1,
//  nombre: 'El principito',
//  descripcion: 'El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry',
//  autor: 'Antoine de Saint-Exupéry',
//
//},
//
//]
arrayLibros:any[] = [];
constructor(private cartService:CartService) {
  this.arrayLibros = this.cartService.getCart();
}

DelCart(book: any) {
  this.cartService.DelCart(book);
}
}


