import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayFromMaxticashComponent } from './pay-from-maxticash/pay-from-maxticash.component';
import { PayFromOtherBankComponent } from './pay-from-other-bank/pay-from-other-bank.component';
import { RequestForPaymentComponent } from './request-for-payment/request-for-payment.component';
import { OperationsComponent } from './operations/operations.component';

const routes: Routes = [
  { path: 'payFromMaxticash', component: PayFromMaxticashComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'payFromOtherBank', component: PayFromOtherBankComponent },
  { path: 'requestForPayment', component: RequestForPaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
