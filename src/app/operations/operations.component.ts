import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService';
import { AccService } from '../accService';
import { OperService } from '../operService';
import { Operation } from '../operation';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  private _operations: Operation[];

  constructor(
    private _userService: UserService,
    private _accService: AccService,
    private _operService: OperService) { }

  get operations() {
    return this._operations;
  }

  ngOnInit() {
    this._operService.getUserOperations(this._userService.user)
      .subscribe((operations: []) => {
        this._operations = operations.map(
          (operation: { cash: number, comment: string }) =>
            new Operation(operation.cash, operation.comment))
      });
  }

}
