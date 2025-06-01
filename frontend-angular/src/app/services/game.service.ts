import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Game } from '../models/game.model'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGame(gameId:string): Observable<Game>{
    return this.http.get<Game>(`${environment.backUrl}/game/${gameId}`, { withCredentials: false })
  }
}
