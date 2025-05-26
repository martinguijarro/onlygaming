import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';
import { Role } from '../models/enums';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  userName: string = '';

  constructor(
    private router:Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Registro(){
    this.router.navigate(['register']);
  }

  cancelLogin(){
    this.router.navigate(['']);
  }

  userLogin() {
    
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.loginService.loginUsuario(loginData).subscribe({
        next: res => {
          if (res.authenticated && res.user) {
            this.userName = res.user.name;
            localStorage.setItem('username', res.user.username);
            console.log('Successful login. Welcome,', localStorage.getItem('username'));
            this.cancelLogin();
          } else {
            console.log('Unsuccessful login. Wrong username or password');
          }
        },
        error: err => console.error('Login error:', err)
      });
    } else {
      console.log('Invalid form');
    }

  }
}
