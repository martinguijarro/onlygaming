import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatButtonModule } from '@angular/material/button';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      // MatIconModule,
      // MatDividerModule,
      // MatButtonModule
    )
  ]
};
