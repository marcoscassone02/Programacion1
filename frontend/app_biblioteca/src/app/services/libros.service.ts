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

  setGenero(genero: string): Observable<any> {
    console.log('Género antes de actualizar:', this.filtro_genero); // Verifica el valor actual
    this.filtro_genero = genero;
    console.log('Género actualizado:', this.filtro_genero); // Verifica el nuevo valor
    this.VerCatalogoComponent.arrayLibros = []
    return this.getLibros(); // Llama a getLibros después de actualizar el género
  }

  getLibros(): Observable<any> {
    let auth_token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${auth_token}`,
    });

    // Configurar los parámetros de la consulta
    let params = new HttpParams().set('genero', this.filtro_genero);

    // Agregar los headers y los params a las opciones de la solicitud
    const requestOptions = { headers: headers, params: params };
    return this.http.get(this.url + '/libros', requestOptions);
  }
}