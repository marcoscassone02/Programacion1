import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosadminService {
  url = '/api';
  filtro_busqueda = '';  
  private terminoBusquedaSubject = new BehaviorSubject<string>('');
  public terminoBusquedaObservable = this.terminoBusquedaSubject.asObservable();
  constructor(
    private httpClient:HttpClient
  ) { }

  setBusqueda(filtro_busqueda: string = '') {
    console.log('Busqueda antes de actualizar1:', this.filtro_busqueda); 

    this.filtro_busqueda = filtro_busqueda
    console.log('Busqueda despues de actualizar1:', this.filtro_busqueda)
    this.terminoBusquedaSubject.next(this.filtro_busqueda); 

  }

  getBusqueda(): string{
    return (this.filtro_busqueda)
  }
  

  getLibrosadmin(page: number = 1, perPage: number = 2, busqueda: string = this.getBusqueda()) {
    let auth_token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    })

    // Configurar los parámetros de la consulta
    let params = new HttpParams().set('busqueda', busqueda);

    // Agregar los headers y los params a las opciones de la solicitud
    const requestOptions = { headers: headers, params: params };

    return this.httpClient.get(`${this.url}/libros?page=${page}&per_page=${perPage}`, requestOptions);

  }

  deleteBook(bookId: number): Observable<any> {
    let auth_token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });

    const requestOptions = { headers: headers };

    return this.httpClient.delete(`${this.url}/libro/${bookId}`, requestOptions).pipe(take(1));
    
  }

  updateBook(bookId: number, dataUpdate: any): Observable<any> {
    let auth_token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    });

    const requestOptions = { headers: headers };

    return this.httpClient.put(`${this.url}/libro/${bookId}`, dataUpdate, requestOptions).pipe(take(1));

  }

  getBookById(bookId: number): Observable<any> {
    let auth_token = localStorage.getItem('token');
  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
  
    return this.httpClient.get(`${this.url}/libro/${bookId}`, { headers });
    }
}
