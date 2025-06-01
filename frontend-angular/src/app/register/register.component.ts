import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { RegisterService } from '../services/register.service';
import { User } from '../models/user.model';
import { Role } from '../models/enums';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      tel: ['', Validators.required],
      role: [Role.CLIENT, Validators.required],
    })
  }

  Login(){
    this.router.navigate(['login']);
  }

  cancelRegister(){
    this.router.navigate(['']);
  }

  userRegister() {

    if (this.registerForm.valid) {
      const newUser: User = this.registerForm.value;

      this.registerService.createUser(newUser).subscribe({
        next: res => {
          console.log(res);
          localStorage.setItem('userid', res.userId);
          console.log('Usuario creado: ', res);
          this.Login();
        },
        error: err => {
          console.error('Error al crear usuario: ', err);
        }
      });
    } else {
      console.log('Formulario inválido');
    }

  }
}
