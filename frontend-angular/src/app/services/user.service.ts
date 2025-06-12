import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Game } from '../models/game.model';

export interface LoginResponse {
    authenticated: boolean;
    user: User | null;
}

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) {}

    getAllGames() {
        return this.http.get<Game[]>(`${environment.backUrl}/games/all`, { withCredentials: false })
    }

    getUserById(userId: string): Observable<User> {
        return this.http.get<User>(`${environment.backUrl}/user/${userId}`, { withCredentials: false })
    }

    getUserGames(userId: string) {
        return this.http.get<Game[]>(`${environment.backUrl}/user/${userId}/games`, { withCredentials: false })
    }

    deleteUserByUsername(username: string): Observable<any> {
        return this.http.delete<any>(`${environment.backUrl}/user/username/${username}/delete`, { withCredentials: false })
    }

    updateUserRole(username: string, role: string): Observable<any> {
        return this.http.put<any>(`${environment.backUrl}/user/username/${username}/role`, role, { withCredentials: false })
    }
}