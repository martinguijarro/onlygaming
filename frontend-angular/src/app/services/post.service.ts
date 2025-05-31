import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { PostDTO } from '../models/post.model';

@Injectable({
    providedIn: 'root'
})

export class PostService {

    constructor(private http: HttpClient) {}

    getPosts(): Observable<PostDTO[]> {
        return this.http.get<PostDTO[]>(`${environment.backUrl}/posts/all`, { withCredentials: false })
    }
}