import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';


@Injectable()
export class SecurService implements CanActivate {

  constructor(private route: Router) {}

  canActivate(activRoute: ActivatedRouteSnapshot){
    let loggedUser = localStorage.getItem("loggeduser");
    if(loggedUser && loggedUser != null){
      let loggedUserJson = JSON.parse(loggedUser);
      if(loggedUserJson.userMail !== ""){
        return true;
      } else {
        return false;
      }
    }

    this.route.navigate(['login']);
    return false;
  }

}
