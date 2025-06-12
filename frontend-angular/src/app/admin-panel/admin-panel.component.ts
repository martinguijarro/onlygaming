import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
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
  gameForm: FormGroup;
  deleteUserForm: FormGroup;

  constructor(
    private gameService: GameService,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Formulario para crear juegos
    this.gameForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      developer: ['', Validators.required],
      releaseDate: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });

    // Formulario para eliminar usuarios
    this.deleteUserForm = this.fb.group({
      username: ['', Validators.required]
    });
  }

  goHome() {
    this.router.navigate(['']);
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
        this.gameForm.reset();
      },
      error: err => {
        console.error('Error al crear juego: ', err);
      }
    });
  }

  deleteUser() {
    if (!this.deleteUserForm.valid) {
      console.log('Formulario inválido');
      return;
    }

    const username = this.deleteUserForm.value.username;

    this.userService.deleteUserByUsername(username).subscribe({
      next: () => {
        console.log(`Usuario ${username} eliminado con éxito`);
        this.deleteUserForm.reset();
      },
      error: err => {
        console.error('Error al eliminar usuario: ', err);
      }
    });
  }
}
