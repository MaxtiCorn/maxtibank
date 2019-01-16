import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../authService';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private login: string;
  private password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  auth() {
    this.authService.auth(this.login, this.password);
  }

}
