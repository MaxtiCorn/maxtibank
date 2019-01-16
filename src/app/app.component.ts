import { Component } from '@angular/core';
import { AuthService } from './authService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPageTitle = 'maxtibank';

  constructor(private _authService: AuthService) { }

  get authService() {
    return this._authService;
  }
}
