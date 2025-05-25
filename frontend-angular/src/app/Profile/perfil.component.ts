import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterModule, Router } from '@angular/router';
import { CommentsComponent } from '../comments/comments.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    RouterModule,
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class ProfileComponent {
  constructor(
    private router: Router,
  ){}

  Inicio(){
    this.router.navigate(['/']);
  }
}
