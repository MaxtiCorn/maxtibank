import { Component, OnInit } from '@angular/core';
import { OperService } from '../operService';
import { UserService } from '../userService';
import { AccService } from '../accService';
import { Account } from '../account';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay-from-maxticash',
  templateUrl: './pay-from-maxticash.component.html',
  styleUrls: ['./pay-from-maxticash.component.css']
})
export class PayFromMaxticashComponent implements OnInit {
  private _accounts: Account[];

  private _form: FormGroup;

  constructor(
    private _userService: UserService,
    private _accService: AccService,
    private _operService: OperService) { }

  get accounts() {
    return this._accounts;
  }

  get form() {
    return this._form;
  }

  get accountInput() {
    return this._form.get('account');
  }

  get cashInput() {
    return this._form.get('cash');
  }

  get commentInput() {
    return this._form.get('comment');
  }

  ngOnInit() {
    this._form = new FormGroup({
      account: new FormControl(null, [Validators.required]),
      cash: new FormControl(null, [Validators.required, Validators.pattern(/\d+/)]),
      comment: new FormControl(null, [Validators.required])
    });

    this._accService.getAccounts(this._userService.user)
      .subscribe((accounts: []) => {
        this._accounts = accounts.map(
          (account: { id: number, name: string, cash: number }) =>
            new Account(account.id, account.name, account.cash))
      });
  }

  submit() {
    const accountId = this._form.get('account').value.id;
    const cash = this._form.get('cash').value;
    const comment = this._form.get('comment').value;

    this._operService.addOperation(accountId, cash, comment);
  }

}
