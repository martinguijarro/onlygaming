import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

export interface LoginResponse {
    authenticated: boolean;
    user: User | null;
}

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) {}

    getUserById(userId: string): Observable<User> {
        return this.http.get<User>(`${environment.backUrl}/user/${userId}`, { withCredentials: false })
    }
}