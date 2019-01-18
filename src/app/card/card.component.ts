import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private _form: FormGroup;

  @Input() set form(value: FormGroup) {
    this._form = value;
  }

  get form() {
    return this._form;
  }

  get cardNumberInput() {
    return this._form.get('cardNumber');
  }

  get dateInput() {
    return this._form.get('date');
  }

  get cvcInput() {
    return this._form.get('cvc');
  }

  constructor() { }

  ngOnInit() {
  }

}
