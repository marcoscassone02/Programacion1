import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cart: any[] = [];
  url = '/api';

  constructor(private httpClient: HttpClient) {}
  cleanCart() {
    this.cart = [];
  }

  addToCart(book: any) {
    // Verifica si el libro ya existe en el carrito
    const exists = this.cart.some((item: any) => item.id === book.id);
  
    if (!exists) {
      this.cart.push(book); // Agrega el libro solo si no existe
      console.log('Libro agregado al carrito:', book);
    } else {
      console.warn('El libro ya está en el carrito:', book);
    }
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
  createPrestamo(data: any): Observable<any> {
    const auth_token = localStorage.getItem('token');

    if (!auth_token) {
      throw new Error('No se encontró el token de autenticación');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });

    const requestOptions = { headers: headers };

    return this.httpClient.post(`${this.url}/prestamos`, data, requestOptions).pipe(take(1));
  }
  updateStock(libroId: number, nuevoStock: number): Observable<any> {
    const auth_token = localStorage.getItem('token');

    if (!auth_token) {
      throw new Error('No se encontró el token de autenticación');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`,
    });

    const requestOptions = { headers: headers };

    return this.httpClient.put(`${this.url}/libro/${libroId}`, { stock: nuevoStock }, requestOptions).pipe(take(1));
  }

}