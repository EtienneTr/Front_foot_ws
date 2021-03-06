import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import {RegisterComponent} from "./pages/register/register.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {PronosComponent} from "./pages/pronos/pronos.component";
import {ContactComponent} from "./pages/contact/contact.component";

import { SecurService } from './services/secur.service';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [SecurService] },
  { path: 'pronos', component: PronosComponent, canActivate: [SecurService] },
  { path: 'contact', component: ContactComponent },
];

