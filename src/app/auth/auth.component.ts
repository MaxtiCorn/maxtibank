import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private _form: FormGroup;

  constructor(private _userService: UserService) { }

  get form() {
    return this._form;
  }

  get loginInput() {
    return this._form.get('login');
  }

  get passwordInput() {
    return this._form.get('password');
  }

  ngOnInit() {
    this._form = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  auth() {
    const login = this._form.get('login').value;
    const password = this._form.get('password').value;
    this._userService.auth(login, password);
  }
}
