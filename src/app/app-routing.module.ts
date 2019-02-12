import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOperationComponent } from './add-operation/add-operation.component';
import { OperationsComponent } from './operations/operations.component';

const routes: Routes = [
  { path: 'addOperation', component: AddOperationComponent },
  { path: 'operations', component: OperationsComponent }
  // { path: 'payFromOtherBank', component: PayFromOtherBankComponent },
  // { path: 'requestForPayment', component: RequestForPaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
