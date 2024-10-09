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
}
