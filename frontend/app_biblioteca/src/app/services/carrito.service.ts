import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {}

  addToCart(book: any) {
    this.cart.push(book);
  }

  getCart() {
    return this.cart;
  }
  DelCart(book: any) {
    const index = this.cart.findIndex((item: any) => item.id === book.id);
    if (index !== -1) {
        this.cart.splice(index, 1);
    }
  }

}