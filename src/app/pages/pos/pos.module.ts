import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos.component';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  declarations: [PosComponent, BillingComponent],
  imports: [
    CommonModule,
    PosRoutingModule
  ]
})
export class PosModule { }
