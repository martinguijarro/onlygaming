import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})

export class RegisterService {
    
    constructor(private http: HttpClient) {}

    createUser(user: User): Observable<User>  {
        return this.http.post<User>(`${environment.backUrl}/user/create`, user, { withCredentials: false })
    }
}