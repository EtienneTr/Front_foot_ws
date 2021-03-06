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
  public bets: Array<Object>;

  constructor(private authservice: AuthService,
              private betService: BetService){
    var loggedUser = JSON.parse(localStorage.getItem("loggeduser"));
    this.token = loggedUser && loggedUser.token;
    this.usermail = loggedUser && loggedUser.usermail;
    this.bets = Array<Object>();
  }

  ngOnInit(){
    //logout
    this.betService.winBets(this.token)
      .subscribe(data => {
        if(data !== null){
          for(let prop in data){
            this.bets.push({date: prop, result: data[prop]});
          }
          //this.bets = data;
          console.log(this.bets);
        }
      });
  }

  public cote(home, away, draw, score) : string {
    switch(score){
      case "1":
          return home;
      case "2":
          return away;
      case "N":
          return draw;
    }
  }
}
