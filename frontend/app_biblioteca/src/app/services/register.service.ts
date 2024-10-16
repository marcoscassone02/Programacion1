import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, take} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = '/api';
  constructor(
    private httpClient: HttpClient, 
  ) { }

  register(dataRegister:any): Observable<any> {

    return this.httpClient.post(this.url+'/usuarios', dataRegister).pipe(take(1));
  }
}
