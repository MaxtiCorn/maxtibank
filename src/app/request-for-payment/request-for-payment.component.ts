import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OperService } from '../operService';
import { Operation } from '../operation';

@Component({
  selector: 'app-request-for-payment',
  templateUrl: './request-for-payment.component.html',
  styleUrls: ['./request-for-payment.component.css']
})
export class RequestForPaymentComponent implements OnInit {
  private _sender: string;
  private _money: number;
  private _comment: string;

  constructor(private _operService: OperService, private _changeDetectorRef: ChangeDetectorRef) { }

  get sender() {
    return this._sender;
  }

  set sender(value: string) {
    this._sender = value;
  } 

  get money() {
    return this._money;
  }

  set money(value: number) {
    this._money = value;
  } 

  get comment() {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  ngOnInit() {
    this._changeDetectorRef.detectChanges();
  }

  submit() {
    this._operService.addOperation(new Operation(this._sender, 'maxticash', this._money))
  }

}
