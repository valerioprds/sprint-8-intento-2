import { Component } from '@angular/core';
import { User } from '../_models';
import { AccountService } from '../_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
