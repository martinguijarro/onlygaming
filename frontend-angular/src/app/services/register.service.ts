import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model'

@Injectable({
    providedIn: 'root'
})

export class RegisterService {
    constructor(private http: HttpClient) {}

    createUser(user: User) {
        return this.http.post('http://localhost:8080/user/create', user, { withCredentials: false })
    }
}