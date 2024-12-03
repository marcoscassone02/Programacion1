import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  url = '/api';
  constructor(
    private httpClient:HttpClient
  ) { }


  getPrestamos() {
    let auth_token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    })

    const requestOptions = {headers: headers}

    return this.httpClient.get(this.url + '/prestamos', requestOptions);
  }
  deletePrestamos(prestamoId: number): Observable<any> {
    let auth_token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });

    const requestOptions = { headers: headers };

    return this.httpClient.delete(`${this.url}/prestamo/${prestamoId}`, requestOptions).pipe(take(1));
    
  }
  

  
}