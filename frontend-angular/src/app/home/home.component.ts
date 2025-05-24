import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterModule, Router } from '@angular/router';
import { CommentsComponent } from '../comments/comments.component';
import { JuegosService } from '../juegos.service';
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

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private juegosService: JuegosService,
  ) {}

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  nuevoComentario() {
    this.dialog.open(CommentsComponent, {
      width: '500px',
      panelClass: 'dialog-comentario'
    });
  }

  ngOnInit(): void {
    //usi de la api de juegos(por ahora no funciona)
    // this.juegosService.getJuegos().subscribe((response) => {
    //   console.log('Respuesta de GiantBomb:', response);
    //   this.juegos = response.results;
    // });
  }
}
