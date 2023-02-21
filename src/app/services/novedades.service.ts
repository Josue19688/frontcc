import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostResponse } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {

  constructor(
    private http:HttpClient
  ) { }

  getPost():Observable<PostResponse>{
    const url='https://api-josue.herokuapp.com/api/post';
    return this.http.get<PostResponse>(url);
  }
}


