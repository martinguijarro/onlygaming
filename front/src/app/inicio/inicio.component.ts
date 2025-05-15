import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterModule, Router } from '@angular/router';
import { ComentariosComponent } from '../comentarios/comentarios.component';
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
    CommonModule,
    ComentariosComponent,
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  imgPerfil = false;
  juegos: any[] = [];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private juegosService: JuegosService,
  ) {}

  Login() {
    this.router.navigate(['/login']);
  }

  nuevoComentario() {
    this.dialog.open(ComentariosComponent, {
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
