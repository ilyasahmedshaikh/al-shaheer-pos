import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosComponent } from './pos.component';
import { BillingComponent } from './billing/billing.component';
import { PrintReceiptComponent } from './print-receipt/print-receipt.component';

const routes: Routes = [
  { 
    path: '', 
    component: PosComponent,
    children: [
      { path: '', component: BillingComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'print-receipt', component: PrintReceiptComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
