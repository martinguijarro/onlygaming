import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private http: HttpClient) { }

  getJuegos(): Observable<any> {
    const params = {
      api_key: 'c2cbc64ca70a6d034140bb910b503742ba35df97',
      format: 'json',
    };
    const url='https://www.giantbomb.com/api/games/';
    return this.http.get(url,{params});
  }
}
