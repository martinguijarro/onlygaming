import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { Game } from '../models/game.model';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    RouterModule,
    MatCardModule,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  username: string | null = null;

  user: any = {};
  userGames: Game[] = [];
  posts: Post[] = [];
  allGames: Game[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private postService: PostService
  ) {}

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
    this.router.navigate([''])
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
      // Obtener datos del usuario
      this.userService.getUserById(userId).subscribe({
        next: res => {
          this.user = res;
          // Cargar posts cuando ya tenemos el usuario
          this.loadUserPosts();
        },
        error: err => {
          console.error('Error al obtener datos del usuario: ', err);
        }
      });

      // Obtener juegos añadidos por el usuario
      this.userService.getUserGames(userId).subscribe({
        next: games => {
          this.userGames = games;
        },
        error: err => {
          console.error('Error al obtener juegos del usuario: ', err);
        }
      });

      // Obtener todos los juegos para resolver nombres
      this.userService.getAllGames().subscribe({
        next: games => {
          this.allGames = games;
        },
        error: err => {
          console.error('Error al obtener todos los juegos: ', err);
        }
      });
    }
  }

  loadUserPosts(): void {
    if (!this.user.username) return;

    this.postService.getPostsByUsername(this.user.username).subscribe({
      next: postsData => {
        // Mapear posts para añadir nombre del juego en cada post
        this.posts = postsData.map(post => ({
          ...post,
          gameName: this.getGameName(post.gameId)
        }));
      },
      error: err => console.error('Error cargando posts:', err)
    });
  }

  getGameName(gameId: string): string {
    const game = this.allGames.find(g => g.gameId === gameId);
    return game ? game.name : 'Juego desconocido';
  }

}
