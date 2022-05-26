import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http: HttpClient) { }

  public getPelis(id:string): Observable<any>{
    const options = {
      method: 'GET',
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'a6e2d4587bmsh951469e49f06c20p191061jsnb57f136bc429',
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
      })
    }
    return this.http.get('https://movies-app1.p.rapidapi.com/api/movie/'+id,options);
  }
}
