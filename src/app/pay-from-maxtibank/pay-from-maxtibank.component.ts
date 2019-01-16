import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OperService } from '../operService';
import { Operation } from '../operation';

@Component({
  selector: 'app-pay-from-maxtibank',
  templateUrl: './pay-from-maxtibank.component.html',
  styleUrls: ['./pay-from-maxtibank.component.css']
})
export class PayFromMaxtibankComponent implements OnInit {
  private reciever: string;
  private money: number;
  private comment: string;

  constructor(private operService: OperService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
  }

  submit() {
    this.operService.addOperation(new Operation('maxtibank', this.reciever, this.money))
  }

}
