import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos.component';
import { BillingComponent } from './billing/billing.component';
import { PrintReceiptComponent } from './print-receipt/print-receipt.component';

@NgModule({
  declarations: [PosComponent, BillingComponent, PrintReceiptComponent],
  imports: [
    CommonModule,
    PosRoutingModule
  ]
})
export class PosModule { }
