import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosadminService {
  url = '/api';
  constructor(
    private httpClient:HttpClient
  ) { }


  getLibrosadmin() {
    let auth_token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    })

    const requestOptions = {headers: headers}

    return this.httpClient.get(this.url + '/libros', requestOptions);
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
