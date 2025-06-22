import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login/paciente', pathMatch: 'full' },
  { path: 'login/:tipo', component: LoginComponent },
];

export const appConfig = {
  providers: [provideRouter(routes)],
};
