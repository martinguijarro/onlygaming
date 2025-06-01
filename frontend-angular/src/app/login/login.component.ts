import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';

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

  register(){
    this.router.navigate(['register']);
  }

  cancelLogin(){
    this.router.navigate(['']);
  }

  userLogin() {
    
    if (!this.loginForm.valid) {
      console.log('Invalid form');
      return;
    }

    const loginData = this.loginForm.value;

    this.loginService.loginUsuario(loginData).subscribe({
      next: res => {
        if (res.authenticated && res.user) {
          console.log(res)
          this.userName = res.user.name;
          localStorage.setItem('username', res.user.username);
          localStorage.setItem('userId', res.user.userId);
          localStorage.setItem('userRole', res.user.role);
          console.log('Successful login. Welcome,', localStorage.getItem('username'));
          console.log('User id: ', localStorage.getItem('userId'));
          this.cancelLogin();
        } else {
          console.log('Unsuccessful login. Wrong username or password');
        }
      },
      error: err => console.error('Login error:', err)
    });

  }
}
