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
  getUser(token: string){
    let createUrl = this.baseUrl + '/me';
    let headers    = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
    let options    = new RequestOptions({ headers: headers });

    return this.http.get(createUrl, options).map((response: Response) => response.json());
  }

  //return 201 OK
  createUser(user: User) {
    let createUrl = this.baseUrl + '/register';
    let bodyString = JSON.stringify(user);
    let headers    = new Headers({ 'Content-Type': 'application/json' });
    let options    = new RequestOptions({ headers: headers });

    return this.http.post(createUrl, bodyString, options).map((response: Response) => response.json());
  }

  //return roken
  updateUser(user: User, token: string){
    let createUrl = this.baseUrl + '/update';
    let bodyString = JSON.stringify(user);
    let headers    = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
    let options    = new RequestOptions({ headers: headers });

    return this.http.put(createUrl, bodyString, options).map((response: Response) => response.json());
  }

}
