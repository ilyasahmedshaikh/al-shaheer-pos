import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';


@NgModule({
  declarations: [ProductsComponent, AllProductsComponent, AddEditProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
