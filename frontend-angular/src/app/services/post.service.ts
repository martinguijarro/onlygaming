import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Post, PostDTO } from '../models/post.model';

@Injectable({
    providedIn: 'root'
})

export class PostService {

    constructor(private http: HttpClient) {}

    getPosts(): Observable<PostDTO[]> {
        return this.http.get<PostDTO[]>(`${environment.backUrl}/posts/all`, { withCredentials: false })
    }

    createPost(post: Post) {
        return this.http.post(`${environment.backUrl}/post/create`, post, { withCredentials: false })
    }

    likePost(postId: string, username: string) {
        return this.http.post<PostDTO>(`${environment.backUrl}/post/${postId}/like`, username, { withCredentials: false })
    }

    unlikePost(postId: string, username: string) {
        return this.http.post<PostDTO>(`${environment.backUrl}/post/${postId}/unlike`, username, { withCredentials: false })
    }
}