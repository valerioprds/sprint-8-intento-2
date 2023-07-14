import { Component, OnInit } from '@angular/core';

import { AccountService } from './app/_services/account.service';
import { User } from './app/_models/user';
import { StarshipService } from './app/_services/starships.service';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })



export class AppComponent {
  user?: User | null;

  constructor(
    private accountService: AccountService,
  ) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }



  logout() {
    this.accountService.logout();
  }
}
