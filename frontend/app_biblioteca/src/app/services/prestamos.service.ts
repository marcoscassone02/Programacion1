import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
=======
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
>>>>>>> EmilianoMassolin

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  url = '/api';

  constructor(private httpClient: HttpClient) {}

  getPrestamos() {
    let auth_token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    });

    const requestOptions = { headers: headers };

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
  updatePrestamo(prestamoId: number, dataUpdate: any): Observable<any> {
    let auth_token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    });

    const requestOptions = { headers: headers };
    if (typeof dataUpdate.fecha_prestamo === 'string') {
      dataUpdate.fecha_prestamo = new Date(dataUpdate.fecha_prestamo).toISOString();
    }
    if (typeof dataUpdate.fecha_devolucion === 'string') {
      dataUpdate.fecha_devolucion = new Date(dataUpdate.fecha_devolucion).toISOString();
    }


    return this.httpClient.put(`${this.url}/prestamo/${prestamoId}`, dataUpdate, requestOptions).pipe(take(1));

  }
  getUserById(prestamoId: number): Observable<any> {
    let auth_token = localStorage.getItem('token');
  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
  
    return this.httpClient.get(`${this.url}/prestamo/${prestamoId}`, { headers });
    }


  // Método para obtener préstamos por usuario_id
  getPrestamosByUsuarioId(usuario_id: number) {
    let auth_token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    });

    const requestOptions = { headers: headers };

    // Incluye usuario_id como parámetro en la URL
    return this.httpClient.get(`${this.url}/prestamo?usuario_id=${usuario_id}`, requestOptions);
  }
}

  

  