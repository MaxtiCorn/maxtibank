import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Card } from '../card';
import { OperService } from '../operService';
import { Operation } from '../operation';

@Component({
  selector: 'app-pay-from-other-bank',
  templateUrl: './pay-from-other-bank.component.html',
  styleUrls: ['./pay-from-other-bank.component.css']
})
export class PayFromOtherBankComponent implements OnInit {
  private _card: Card;
  private _reciever: string;
  private _money: number;
  private _comment: string;

  constructor(private operService: OperService, private changeDetectorRef: ChangeDetectorRef) { }

  set card(value: Card) {
    this._card = value;
  }

  set reciever(value: string) {
    this._reciever = value;
  }

  set money(value: number) {
    this._money = value;
  }

  set comment(value: string) {
    this._comment = value;
  }

  ngOnInit() {
    this._card = new Card('', '', '');
    this.changeDetectorRef.detectChanges();
  }

  submit() {
    this.operService.addOperation(new Operation(this._card.number, this._reciever, this._money));
  }

}
