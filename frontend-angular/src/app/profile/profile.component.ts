import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../services/user.service';
import { Game } from '../models/game.model';

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
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  username: string | null = null;

  user: any = {};
  userGames: Game[] = [];  // <-- Aquí almacenamos los juegos

  constructor(
    private router: Router,
    private userService: UserService,
    private userGameService: UserService // <-- Servicio para los juegos
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
    console.log('User logged out');
  }

  admin() {
    this.router.navigate(['/admin']);
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
    }
  }

  // Métodos de navegación y sesión (login, logout, etc.) sin cambios...
}
