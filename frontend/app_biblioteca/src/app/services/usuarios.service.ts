import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = '/api';
  filtro_busqueda = '';
  constructor(
    private httpClient:HttpClient
  ) { 
    
  }
  private terminoBusquedaSubject = new BehaviorSubject<string>('');

  public terminoBusquedaObservable = this.terminoBusquedaSubject.asObservable();

  setBusqueda(filtro_busqueda: string = '') {
    console.log('Busqueda antes de actualizar:', this.filtro_busqueda); 

    this.filtro_busqueda = filtro_busqueda
    console.log('Busqueda despues de actualizar:', this.filtro_busqueda)
    this.terminoBusquedaSubject.next(this.filtro_busqueda); 

  }

  getBusqueda(): string{
    return (this.filtro_busqueda)
  }



  getUsers(busqueda: string = this.getBusqueda()) {
    let auth_token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    })
    let params = new HttpParams().set('busqueda', busqueda);
    
    const requestOptions = {headers: headers, params: params}

    return this.httpClient.get(this.url + '/usuarios', requestOptions);
  }








  deleteUser(userId: number) {
    let auth_token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });

    const requestOptions = { headers: headers };

    return this.httpClient.delete(`${this.url}/usuario/${userId}`, requestOptions);
  }

  updateUser(userId: number, dataUpdate: any): Observable<any> {
    let auth_token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    });

    const requestOptions = { headers: headers };

    return this.httpClient.put(`${this.url}/usuario/${userId}`, dataUpdate, requestOptions).pipe(take(1));

  }

  getUserById(userId: number): Observable<any> {
    let auth_token = localStorage.getItem('token');
  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
  
    return this.httpClient.get(`${this.url}/usuario/${userId}`, { headers });
    }
}
