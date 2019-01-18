import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-for-payment',
  templateUrl: './request-for-payment.component.html',
  styleUrls: ['./request-for-payment.component.css']
})
export class RequestForPaymentComponent implements OnInit {
  private _form: FormGroup;

  constructor() { }

  get form() {
    return this._form;
  }

  get cashInput() {
    return this._form.get('cash');
  }

  get commentInput() {
    return this._form.get('comment');
  }

  ngOnInit() {
    this._form = new FormGroup({
      cash: new FormControl(null, [Validators.required, Validators.pattern(/\d+/)]),
      comment: new FormControl(null, [Validators.required])
    });
  }

  submit() {
    const cash = this._form.get('cash').value;
    const comment = this._form.get('comment').value;
    console.log(cash, comment);
  }

}
