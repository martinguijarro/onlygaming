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

export class LoginService {

    constructor(private http: HttpClient) {}

    loginUsuario(data: { username: string; password: string }): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${environment.backUrl}/login`, data, { withCredentials: false })
    }
}