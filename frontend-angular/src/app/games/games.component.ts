import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-games',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  username: string | null = null;
  games:Game[]=[];
  
  constructor(
    private router: Router,
    private gameService:GameService,
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

  Games() {
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

    this.gameService.getGames().subscribe(games => {
      this.games = games.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  Showdesc(){
    //Dialog que muestar la descripcion
    console.log('Mostrar descripcion');
  }
}
