import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './pages/home/home.component';
import {LoginComponent} from "./pages/login/login.component";

import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user.service";
import {BetService} from "./services/bet.service";
import {RegisterComponent} from "./pages/register/register.component";
import {ProfileComponent} from "./pages/profile/profile.component";

import { User } from './models/user.model';
import {SecurService} from "./services/secur.service";
import {Bets} from "./models/bets.model";
import {PronosComponent} from "./pages/pronos/pronos.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PronosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    AuthService,
    BetService,
    UserService,
    User,
    Bets,
    SecurService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
