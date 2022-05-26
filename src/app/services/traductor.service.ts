import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TraductorService {

constructor(private http:HttpClient) { 

}

public getLanguajes():Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      'X-RapidAPI-Key': 'a6e2d4587bmsh951469e49f06c20p191061jsnb57f136bc429'
    }),
  }
  return this.http.get("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", httpOptions);
}

public translateText(source:string, target:string, text:string):Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    'X-RapidAPI-Key': 'a6e2d4587bmsh951469e49f06c20p191061jsnb57f136bc429',
    }),
    }
    const body = new HttpParams()
    .set('q', text)
    .set('target', target)
    .set('source', source);

  return this.http.post("https://google-translate1.p.rapidapi.com/language/translate/v2",body, httpOptions);
}

}
