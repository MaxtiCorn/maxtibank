import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentsComponent } from './payments/payments.component';
import { CardComponent } from './card/card.component';
import { PayFromMaxtibankComponent } from './pay-from-maxtibank/pay-from-maxtibank.component';
import { PayFromOtherBankComponent } from './pay-from-other-bank/pay-from-other-bank.component';
import { RequestForPaymentComponent } from './request-for-payment/request-for-payment.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'payFromMaxtibank', component: PayFromMaxtibankComponent },
  { path: 'payFromOtherBank', component: PayFromOtherBankComponent },
  { path: 'requestForPayment', component: RequestForPaymentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent,
    CardComponent,
    PayFromMaxtibankComponent,
    PayFromOtherBankComponent,
    RequestForPaymentComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
