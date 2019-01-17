import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OperService } from '../operService';
import { Operation } from '../operation';

@Component({
  selector: 'app-pay-from-maxticash',
  templateUrl: './pay-from-maxticash.component.html',
  styleUrls: ['./pay-from-maxticash.component.css']
})
export class PayFromMaxticashComponent implements OnInit {
  private _reciever: string;
  private _money: number;
  private _comment: string;

  constructor(private operService: OperService, private changeDetectorRef: ChangeDetectorRef) { }

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
    this.changeDetectorRef.detectChanges();
  }

  submit() {
    this.operService.addOperation(new Operation('maxticash', this._reciever, this._money))
  }

}
