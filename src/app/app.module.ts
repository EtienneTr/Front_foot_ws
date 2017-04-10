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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
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
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
