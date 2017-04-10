import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//user
import { User } from "../models/user.model";

//RXJS methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  private baseUrl = 'http://5.39.80.227:8080/api/identification';

  constructor(private http: Http){}

  //return User
  getUser(name: string, token: string){
    let createUrl = this.baseUrl + '/get/' + name;
    let headers    = new Headers({ 'Content-Type': 'application/json', 'x-access-token': token });
    let options    = new RequestOptions({ headers: headers });

    return this.http.get(createUrl, options).map((response: Response) => response.json());
  }

  //return 201 OK
  createUser(user: User) {
    let createUrl = this.baseUrl + '/register';
    let bodyString = JSON.stringify(User);
    let headers    = new Headers({ 'Content-Type': 'application/json' });
    let options    = new RequestOptions({ headers: headers });

    return this.http.post(createUrl, bodyString, options).map((response: Response) => response.json());
  }

  //return roken
  updateUser(user: User, username: string){
    let createUrl = this.baseUrl + '/update/' + username;
    let bodyString = JSON.stringify(User);
    let headers    = new Headers({ 'Content-Type': 'application/json', 'x-access-token': user.token });
    let options    = new RequestOptions({ headers: headers });

    return this.http.put(createUrl, bodyString, options).map((response: Response) => response.json());
  }


  //ACCOUNTS
  getAccountDetails(account: string, token: string){
    let createUrl = this.baseUrl + 'account/' + account;
    let headers    = new Headers({ 'Content-Type': 'application/json', 'x-access-token': token });
    let options    = new RequestOptions({ headers: headers });

    return this.http.get(createUrl, options).map((response: Response) => response.json());
  }

  getAccounts(token: string){
    let createUrl = this.baseUrl + 'account/all';
    let headers    = new Headers({ 'Content-Type': 'application/json', 'x-access-token': token });
    let options    = new RequestOptions({ headers: headers });

    return this.http.get(createUrl, options).map((response: Response) => response.json());
  }

  transferAccounts(fromAccount: string, toAccount: string, amount: number, token: string){
    let transfertUrl = this.baseUrl + 'account/transfer/' + fromAccount + '/' + toAccount;
    let bodyString = JSON.stringify({amount: amount});
    let headers    = new Headers({ 'Content-Type': 'application/json', 'x-access-token': token });
    let options    = new RequestOptions({ headers: headers });

    return this.http.post(transfertUrl, bodyString, options).map((response: Response) => response.json());
  }

}
