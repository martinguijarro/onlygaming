import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUser(userId:string): Observable<User>{
    return this.http.get<User>(`${environment.backUrl}/user/${userId}`, { withCredentials: false })
  }
}
