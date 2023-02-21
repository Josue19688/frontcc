import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http:HttpClient
  ) { }

  getUser():Observable<UserResponse>{
    const url ='http://localhost:5000/usuario';
    return this.http.get<UserResponse>(url);
  }
}
