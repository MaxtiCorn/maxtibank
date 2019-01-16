import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authService';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private _login: string;
  private _password: string;

  constructor(private authService: AuthService) { }

  set login(value: string) {
    this._login = value;
  }

  set password(value: string) {
    this._password = value;
  }

  ngOnInit() {
  }

  auth() {
    this.authService.auth(this._login, this._password);
  }

}
