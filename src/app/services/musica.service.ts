import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  constructor(private http:HttpClient) { }

  public buscarCancion(nombre:string):Observable<any>{
    const options = {
      method: 'GET',
      params: {
        q: nombre,
        type: 'tacks',
        limit: '5',
      },
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        'X-RapidAPI-Key': 'a6e2d4587bmsh951469e49f06c20p191061jsnb57f136bc429'
      })
    }
    return this.http.get("https://spotify23.p.rapidapi.com/search/", options);
  }
}
