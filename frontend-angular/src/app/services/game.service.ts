import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Game } from '../models/game.model';

@Injectable({
    providedIn: 'root'
})

export class GameService {

    constructor(private http: HttpClient) {}

    getGames(): Observable<Game[]> {
        return this.http.get<Game[]>(`${environment.backUrl}/games/all`, { withCredentials: false })
    }
}