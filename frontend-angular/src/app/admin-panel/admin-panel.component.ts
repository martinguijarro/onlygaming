import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-admin-panel',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

  gameForm: FormGroup

  constructor(
    private gameService: GameService,
    private fb: FormBuilder
  ) {
    this.gameForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      releaseDate: ['', Validators.required],
      imageUrl: ['', Validators.required]
    })
  }

  createGame() {
    if (!this.gameForm.valid) {
      console.log('Formulario inválido');
      return;
    }

    const newGame: Game = this.gameForm.value;

    this.gameService.createGame(newGame).subscribe({
      next: res => {
        console.log('Juego creado: ', res);
      },
      error: err => {
        console.error('Error al crear juego: ', err);
      }
    });
  }

}
