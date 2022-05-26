import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClimaService {

  constructor(private http:HttpClient) { }

  public obtenerClima(coord:string):Observable<any>{

    const options = {
      method: 'GET',
      params: {
        q: coord,
      },
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '19539c6624mshfdb683a7bb06366p11ca8cjsn490d6d5fa9db'
      })
    }
    return this.http.get("https://community-open-weather-map.p.rapidapi.com/weather", options);
}
}
