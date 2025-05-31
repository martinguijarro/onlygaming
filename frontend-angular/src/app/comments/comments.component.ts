import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-comentarios',
  standalone:true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    NgFor
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  games: Game[] = [];

  constructor(
    private gameService: GameService
  ){}

  ngOnInit() {
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
    });
  }

}
