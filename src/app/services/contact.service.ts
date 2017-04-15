import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//user
import { User } from "../models/user.model";

//RXJS methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Contact} from "../models/contact.model";

@Injectable()
export class ContactService {

  private baseUrl = 'http://5.39.80.227:8080/api/';

  constructor(private http: Http){}

  //return <List Betting>
  sendContact(contact:Contact){
    let createUrl = this.baseUrl + '/contact/send';
    let bodyString = JSON.stringify(contact);
    let headers    = new Headers({ 'Content-Type': 'application/json' });
    let options    = new RequestOptions({ headers: headers });

    return this.http.post(createUrl, bodyString, options).map((response: Response) => response.json());
  }

}
