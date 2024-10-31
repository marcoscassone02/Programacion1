import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  

  