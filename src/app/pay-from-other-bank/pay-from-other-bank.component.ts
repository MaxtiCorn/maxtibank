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
  private card: Card;
  private reciever: string;
  private money: number;

  constructor(private operService: OperService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.card = new Card('', '', '');
    this.changeDetectorRef.detectChanges();
  }

  submit() {
    this.operService.addOperation(new Operation(this.card.getNumber(), this.reciever, this.money));
  }

}
