import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  url='/api';
  constructor(
    private http: HttpClient
  ) { }
  getLibros(page: number = 1, perPage: number = 10): Observable<any> {
    let auth_token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${auth_token}`
    });
    const requestOptions = {headers: headers};
    return this.http.get(`${this.url}/libros?page=${page}&per_page=${perPage}`, requestOptions);
}}
