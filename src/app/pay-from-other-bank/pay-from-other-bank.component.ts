import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay-from-other-bank',
  templateUrl: './pay-from-other-bank.component.html',
  styleUrls: ['./pay-from-other-bank.component.css']
})
export class PayFromOtherBankComponent implements OnInit {
  private _form: FormGroup;
  private _cardForm: FormGroup;

  constructor() { }

  get form() {
    return this._form;
  }

  get cardForm() {
    return this._cardForm;
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

    this._cardForm = new FormGroup({
      cardNumber: new FormControl(null, [Validators.required, Validators.pattern(/\d{4} ?\d{4} ?\d{4} ?\d{4}/)]),
      date: new FormControl(null, [Validators.required, Validators.pattern(/([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))/)]),
      cvc: new FormControl(null, [Validators.required, Validators.pattern(/\d{3}/)])
    });
  }

  submit() {
    const cardNumber = this._cardForm.get('cardNumber').value;
    const date = this._cardForm.get('date').value;
    const cvc = this._cardForm.get('cvc').value;
    const cash = this._form.get('cash').value;
    const comment = this._form.get('comment').value;
    console.log({ cardNumber, date, cvc, cash, comment });
  }

}
