import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
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

    getPostsByUsername(username: string): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.backUrl}/user/${username}/posts`, { withCredentials: false })
    }

    createPost(post: Post) {
        return this.http.post(`${environment.backUrl}/post/create`, post, { withCredentials: false })
    }

    deletePost(postId: string) {
        return this.http.delete<Map<string, boolean>>(`${environment.backUrl}/post/${postId}/delete`);
    }

    likePost(postId: string, username: string) {
        return this.http.post<PostDTO>(`${environment.backUrl}/post/${postId}/like`, username, { withCredentials: false })
    }

    unlikePost(postId: string, username: string) {
        return this.http.post<PostDTO>(`${environment.backUrl}/post/${postId}/unlike`, username, { withCredentials: false })
    }

    reportPost(postId: string, username: string) {
        const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
        return this.http.post<PostDTO>(`${environment.backUrl}/post/${postId}/report`, username, { withCredentials: false, headers})
    }

    RemovereportPost(postId: string, username: string) {
        const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
        return this.http.post<PostDTO>(`${environment.backUrl}/post/${postId}/remove_report`, username, { withCredentials: false, headers})
    }

    clearReportsPost(postId: string) {
        return this.http.post<PostDTO>(`${environment.backUrl}/post/${postId}/clear_reports`, null)
    }
}