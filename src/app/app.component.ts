import { Component } from '@angular/core';
import { UserService } from './userService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPageTitle = 'maxticash';

  constructor(private _userService: UserService) { }

  get userService() {
    return this._userService;
  }
}
