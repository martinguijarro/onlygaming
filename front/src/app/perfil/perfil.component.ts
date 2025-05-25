import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterModule, Router } from '@angular/router';
import { ComentariosComponent } from '../comentarios/comentarios.component';
import { MatCardModule } from '@angular/material/card';
import { JuegosService } from '../Services/juegos.service';
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
    ComentariosComponent,
    MatCardModule,
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  constructor(
    private router: Router,
  ){}

  Inicio(){
    this.router.navigate(['/inicio']);
  }
}
