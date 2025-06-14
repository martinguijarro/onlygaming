import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { GamesComponent } from './games/games.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { GamepostComponent } from './gamepost/gamepost.component';
import { ReportedpostComponent } from './reportedposts/reportedposts.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'admin',
    component: AdminPanelComponent
  },
  {
    path: 'reportedposts',
    component: ReportedpostComponent
  },
  { 
    path: 'game/:gameName',
    component: GamepostComponent
  },
];
