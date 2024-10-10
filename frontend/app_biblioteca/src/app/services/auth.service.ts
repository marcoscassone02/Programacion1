import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, take} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = '/api';
  constructor(
    private httpClient: HttpClient, 
  ) { }

  login(dataLogin:any): Observable<any> {
    // const dataLogin = {
    //   'correo': 'correo123@gmail.com',
    //   'contraseña': "123"
    // }
    return this.httpClient.post(this.url+'/auth/login', dataLogin).pipe(take(1));
  }
  logout(){
    localStorage.removeItem('token');
  }
  // Decodificar el token manualmente sin librerías adicionales
  decodeToken(token: string) {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload)); // Decodificar el payload del JWT
  }
   // Obtener rol del usuario
   getRole(): string {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = this.decodeToken(token);
      return decoded.rol; // Suponiendo que el token tiene un campo "role"
    }
    return '';
  }
}
