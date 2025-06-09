import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { PostDTO } from '../models/post.model';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatCardModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  username: string | null = null;

  user: any = {};
  posts: PostDTO[] = [];
  postsUser: PostDTO[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private postService: PostService,
  ) {}

  toggleLike(post: PostDTO) {
    const username = this.username;
    if (!username) return;

    const hasLiked = post.likes.includes(username);

    if (!hasLiked) {
      console.log("Post " + post.postId + " liked by " + username);
    } else {
      console.log("Post " + post.postId + " disliked by " + username);
    }

    const like$ = hasLiked
      ? this.postService.unlikePost(post.postId, username)
      : this.postService.likePost(post.postId, username);

    like$.subscribe((updatedPost) => {
      post.likes = updatedPost.likes;
    });
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');

    if (this.username) {
      this.isLoggedIn = true;
    }

    if(localStorage.getItem('userRole') === 'ADMIN') {
      this.isAdmin = true;
    }

    const userId = localStorage.getItem('userId');

    if (this.isLoggedIn && userId) {
      this.userService.getUserById(userId).subscribe({
        next: res => {
          this.user = res;
        },
        error: err => {
          console.error('Error al obtener datos del usuario: ', err);
        }
      })
    }

    this.postService.getPosts().subscribe((data) => {
      this.posts=data;
      const userName = this.posts.map(post => post.userName);
      console.log(userName)
      console.log(localStorage.getItem('username'))
      if(userName[0]==localStorage.getItem('username')){
        this.postsUser=this.posts;
      }
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');

    this.isAdmin = false;
    this.isLoggedIn = false;
    this.username = null;

    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  home() {
    this.router.navigate(['']);
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  communities() {
    this.router.navigate(['/communities']);
  }

  games() {
    this.router.navigate(['/games']);
  }
  
  admin() {
    this.router.navigate(['/admin']);
  }
}
