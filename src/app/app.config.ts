import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpService } from './services/http.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
