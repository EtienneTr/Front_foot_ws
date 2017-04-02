import {Component} from '@angular/core';

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public token: string;
  public usermail: string;

  constructor(private authservice: AuthService){
    var loggedUser = JSON.parse(localStorage.getItem("loggeduser"));
    this.token = loggedUser && loggedUser.token;
    this.usermail = loggedUser && loggedUser.usermail;
  }
}
