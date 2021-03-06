import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ProductsListComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class ProductsModule {}
