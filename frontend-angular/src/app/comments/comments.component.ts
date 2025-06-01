import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';

import { Post } from '../models/post.model';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-comentarios',
  standalone:true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    NgFor
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  postForm: FormGroup;
  games: Game[] = [];

  constructor(
    private gameService: GameService,
    private postService: PostService,
    private fb: FormBuilder
  ){
    this.postForm = this.fb.group({
      text: ['', Validators.required],
      date: [Date.now, Validators.required],
      userId: [localStorage.getItem('userId'), Validators.required],
      gameId: ['', Validators.required],
    })
  }

  createPost() {

    if (!this.postForm.valid) {
      console.log('Formulario inválido');
    }

    const newPost: Post = this.postForm.value;
    
    this.postService.createPost(newPost).subscribe({
      next: res => {
        console.log('Post creado: ', res);
      },
      error: err => {
        console.error('Error al crear post: ', err);
      }
    });
  }

  ngOnInit() {
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
    });
  }

}
