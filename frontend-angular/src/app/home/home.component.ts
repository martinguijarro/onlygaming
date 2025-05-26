import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterModule, Router } from '@angular/router';
import { CommentsComponent } from '../comments/comments.component';
import { CommonModule } from '@angular/common';

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

  imgPerfil = false;
  juegos: any[] = [];

  isLoggedIn: boolean = false;
  username: string | null = null;

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) {}

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    localStorage.removeItem('username');
    this.isLoggedIn = false;
    console.log('User logged out');
  }

  register() {
    this.router.navigate(['/register']);
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  newComment() {
    this.dialog.open(CommentsComponent, {
      width: '500px',
      panelClass: 'dialog-comentario'
    });
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    if (this.username) {
      this.isLoggedIn = true;
    }
  }
}
