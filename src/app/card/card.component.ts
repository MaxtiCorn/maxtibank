import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private _card: Card;

  get card() {
    return this._card;
  }

  @Input() set card(value: Card) {
    this._card = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
