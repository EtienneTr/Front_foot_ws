import {Component} from '@angular/core';

import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  logged: boolean;

  constructor(private authService: AuthService) {
    this.authService.showNavBarEmitter.subscribe((mode) => {
      if (mode !== null) {
        this.logged = mode;
      }
    });
  }
}
