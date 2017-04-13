import {Component, OnInit} from '@angular/core';

import { AuthService } from "../../services/auth.service";
import {Bets} from "../../models/bets.model";

import { BetService } from "../../services/bet.service";


@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  public token: string;
  public usermail: string;
  protected bets: Array<Bets>;

  constructor(private authservice: AuthService,
              private betService: BetService){
    var loggedUser = JSON.parse(localStorage.getItem("loggeduser"));
    this.token = loggedUser && loggedUser.token;
    this.usermail = loggedUser && loggedUser.usermail;
  }

  ngOnInit(){
    //logout
    this.betService.winBets(this.token)
      .subscribe(data => {
        if(data !== null){
          this.bets = data;
          console.log(this.bets);
        }
      });
  }
}
