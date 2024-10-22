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
    private http: HttpClient,
    // public verCatalogo: VerCatalogoComponent,
  ) { }

  setGenero(genero: string) {
    console.log('Género antes de actualizar:', this.filtro_genero); 

    this.filtro_genero = genero
    console.log('Genero despues de actualizar:', this.filtro_genero)

  }

  getGenero(): string{
    return (this.filtro_genero)
  }

  getLibros(page: number = 1, perPage: number = 10, genero: string = this.getGenero()): Observable<any> {
    let auth_token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${auth_token}`,
    });

    // Configurar los parámetros de la consulta
    let params = new HttpParams().set('genero', genero);

    // Agregar los headers y los params a las opciones de la solicitud
    const requestOptions = { headers: headers, params: params };
    return this.http.get(`${this.url}/libros?page=${page}&per_page=${perPage}`, requestOptions);
  }
}
    