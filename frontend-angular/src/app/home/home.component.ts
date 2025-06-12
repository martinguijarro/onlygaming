import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterModule, Router } from '@angular/router';
import { CommentsComponent } from '../comments/comments.component';
import { CommonModule } from '@angular/common';
import { PostDTO } from '../models/post.model';
import { PostService } from '../services/post.service';
import { GameService } from '../services/game.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popularGames: Game[] = [];

  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  username: string | null = null;

  posts: PostDTO[] = [];
  
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private postService: PostService,
    private gameService: GameService
  ){}

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
    console.log('User logged out');
  }

  admin() {
    this.router.navigate(['/admin']);
  }

  reportedposts(){
    this.router.navigate(['/reportedposts']);
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

  newComment() {
    const dialogRef = this.dialog.open(CommentsComponent, {
      width: 'auto',
      panelClass: 'dialog-comentario'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.refreshPosts();
      }
    })
  }

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

  toggleReport(post: PostDTO) {
    const username = this.username;
    if (!username) return;

    const hasReported = post.reports?.includes(username) ?? false;

    if (!hasReported) {
      console.log("Post " + post.postId + " reported by " + username);
    } else {
      console.log("Post " + post.postId + " remove reported by " + username);
    }

    const report$ = hasReported
      ? this.postService.RemovereportPost(post.postId, username)
      : this.postService.reportPost(post.postId, username);

    report$.subscribe((updatedPost) => {
      post.reports = updatedPost.reports;
    });
  }

  refreshPosts() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    });
  }


  getPopularGames() {
    this.gameService.getPopularGames().subscribe({
      next: (games) => {
        this.popularGames = games;
      },
      error: (err) => {
        console.error('Error cargando juegos populares', err);
      }
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

    this.refreshPosts();
    this.getPopularGames();
  }
  
}
