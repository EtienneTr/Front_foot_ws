import {Component, OnInit} from '@angular/core';

import { AuthService } from "../../services/auth.service";
import {Bets} from "../../models/bets.model";

import { BetService } from "../../services/bet.service";


@Component({
  selector: 'pronos',
  styleUrls: ['./pronos.component.css'],
  templateUrl: './pronos.component.html'
})
export class PronosComponent implements OnInit{
  public token: string;
  public usermail: string;
  public bets: Array<Object>;
  protected error: string;
  date = "";

  constructor(private betService: BetService){
    var loggedUser = JSON.parse(localStorage.getItem("loggeduser"));
    this.token = loggedUser && loggedUser.token;
    this.usermail = loggedUser && loggedUser.usermail;
    this.bets = Array<Object>();
  }

  ngOnInit(){
    //lget daily bets
    this.betService.getBets(this.token)
      .subscribe(data => {
        if(data !== null){
          this.bets = data;
          //this.bets = data;
          console.log(this.bets);
        }
      },
      error => {
        this.error = "Impossible de récupérer les pronostics du jour.";
      });
    this.date = this.betService.getFormattedDate();
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

  public scoreProno(team, win) : string {
    switch(team){
      case "home":
        if(win == "1") return "W";
        if(win == "2") return "L";
        return "N";
      case "away":
        if(win == "1") return "L";
        if(win == "2") return "W";
        return "N";
    }
  }
}
