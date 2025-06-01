import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Post } from '../models/post.model'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) {}

  createPost(post: Post): Observable<Post>{
      return this.http.post<Post>(`${environment.backUrl}/post/create`, post, { withCredentials: false })
  }

  getPost(): Observable<Post[]>{
      return this.http.get<Post[]>(`${environment.backUrl}/posts/all`, { withCredentials: false })
  }
}