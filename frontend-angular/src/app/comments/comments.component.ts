import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ComentariosService } from '../services/comentarios.service';
import { Post } from '../models/post.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  standalone:true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  constructor(
    private comentariosService: ComentariosService
  ){ }

  text=new FormControl('text');

  Crear(){
    const post: Post = {
      id:Number(''),
      text: this.text.value || '',
      userid: localStorage.getItem('userid')!,
      gameid: '6834701fdc1d4d30fa10d557'
    };
    post.text=this.text.value!;
    this.comentariosService.createPost(post).subscribe({
      next: res=>{
        post.id=res.id;
        console.log('post creado: ',post);
      }
    });
  }

}
