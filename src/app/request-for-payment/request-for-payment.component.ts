import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OperService } from '../operService';
import { Operation } from '../operation';

@Component({
  selector: 'app-request-for-payment',
  templateUrl: './request-for-payment.component.html',
  styleUrls: ['./request-for-payment.component.css']
})
export class RequestForPaymentComponent implements OnInit {
  private sender: string;
  private money: number;
  private comment: string;

  constructor(private operService: OperService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
  }

  submit() {
    this.operService.addOperation(new Operation(this.sender, 'maxtibank', this.money))
  }

}
