import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerCatalogoComponent } from '../components/catalogo/ver-catalogo/ver-catalogo.component'

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  url = '/api';
  filtro_genero = '';

  constructor(
    private http: HttpClient
  ) { }
  getLibros(page: number = 1, perPage: number = 10) {
    let auth_token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${auth_token}`,
    });
    const requestOptions = {headers: headers};
    return this.http.get(this.url+'/libros',requestOptions);
    return this.http.get(`${this.url}/libros?page=${page}&per_page=${perPage}`, requestOptions)
}}
