import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductsComponent,
    children: [
      { path: '', component: AllProductsComponent },
      { path: 'all-products', component: AllProductsComponent },
      { path: 'add-edit-product', component: AddEditProductComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
