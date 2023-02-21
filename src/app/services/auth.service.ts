import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }

  getLogin(correo:string, contrasena:string){
    const url = 'http://localhost:5000/auth';
    const body={correo,contrasena};
    return this.http.post<AuthResponse>(url,body);
    
  }
}
