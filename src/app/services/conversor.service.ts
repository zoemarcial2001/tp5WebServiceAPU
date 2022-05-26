import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private http:HttpClient) { }

  public getCurrecy(have: string, want: string, amount: number):Observable<any>{
    const httpOptions = {
      mmrthod:"GET",
      params: {
        "have": have,
        "want": want,
        "amount": amount
      },
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
        'X-RapidAPI-Key': 'a6e2d4587bmsh951469e49f06c20p191061jsnb57f136bc429',
      }),
    };
    return this.http.get('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',httpOptions);
  }


}
