import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//user
import { User } from "../models/user.model";

//RXJS methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BetService {

  private baseUrl = 'http://5.39.80.227:8080/api/';

  constructor(private http: Http){}

  public getFormattedDate(): string {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let day, month;
    let yyyy = today.getFullYear();
    day = dd.toString();
    if(dd<10){
      day='0'+dd;
    }
    month = mm.toString();
    if(mm<10){
      month='0'+mm;
    }
    let todayStr = yyyy+'-'+month+'-'+day;
    return todayStr;
  }

  //return <List Betting>
  getBets(token: string){
    let today = this.getFormattedDate();
    let createUrl = this.baseUrl + 'betting/getbets/' + today;
    let headers    = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
    let options    = new RequestOptions({ headers: headers });

    return this.http.get(createUrl, options).map((response: Response) => response.json());
  }

  //return Dictionnary<Datetime,<List Betting>>
  winBets(token: string) {
    let createUrl = this.baseUrl + 'betwinning/getbets';
    let headers    = new Headers({ 'Content-Type': 'application/json', 'x-access-token': token });
    let options    = new RequestOptions({ headers: headers });

    return this.http.get(createUrl, options).map((response: Response) => response.json());
  }

}
