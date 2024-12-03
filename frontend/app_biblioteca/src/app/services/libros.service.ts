import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { VerCatalogoComponent } from '../components/catalogo/ver-catalogo/ver-catalogo.component'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  url = '/api';
  filtro_genero = '';
  filtro_busqueda = '';
  private generoSubject = new BehaviorSubject<string>('');  
  private terminoBusquedaSubject = new BehaviorSubject<string>('');

  // Observable que VerCatalogoComponent puede suscribirse para recibir actualizaciones
  public generoObservable = this.generoSubject.asObservable();
  public terminoBusquedaObservable = this.terminoBusquedaSubject.asObservable();

  constructor(
    private http: HttpClient,
    // public verCatalogo: VerCatalogoComponent,
  ) { }

  setBusqueda(filtro_busqueda: string = '') {
    console.log('Busqueda antes de actualizar:', this.filtro_busqueda); 

    this.filtro_busqueda = filtro_busqueda
    console.log('Busqueda despues de actualizar:', this.filtro_busqueda)
    this.terminoBusquedaSubject.next(this.filtro_busqueda); 

  }

  getBusqueda(): string{
    return (this.filtro_busqueda)
  }

  setGenero(genero: string) {
    console.log('Género antes de actualizar:', this.filtro_genero); 

    this.filtro_genero = genero
    console.log('Genero despues de actualizar:', this.filtro_genero)
    this.generoSubject.next(genero); 

  }

  getGenero(): string{
    return (this.filtro_genero)
  }

  getLibros(page: number = 1, perPage: number = 10, genero: string = this.getGenero(), busqueda: string = this.getBusqueda()): Observable<any> {
    let auth_token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${auth_token}`,
    });

    // Configurar los parámetros de la consulta
    let params = new HttpParams().set('genero', genero).set('busqueda', busqueda);

    // Agregar los headers y los params a las opciones de la solicitud
    const requestOptions = { headers: headers, params: params };
    return this.http.get(`${this.url}/libros?page=${page}&per_page=${perPage}`, requestOptions);
    }

  registerbook(dataRegister:any): Observable<any> {
    let auth_token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    })

    const requestOptions = {headers: headers}

    return this.http.post(this.url + '/libros', dataRegister, requestOptions).pipe(take(1));
    }


  

    
  }

    