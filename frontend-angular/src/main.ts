import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './app/home/home.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
