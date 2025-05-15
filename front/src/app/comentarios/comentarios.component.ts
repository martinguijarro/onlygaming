import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-comentarios',
  standalone:true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {

}
