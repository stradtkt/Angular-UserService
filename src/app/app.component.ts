import { UserService } from './components/users/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-service';
  users: Array<any>;
  constructor(private _userService: UserService) {
    this.users = this._userService.users;
  }
}
