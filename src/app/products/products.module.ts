import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { BasicsPageComponent } from './page/basics-page/basics-page.component';
import { NumbersPageComponent } from './page/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './page/uncommon-page/uncommon-page.component';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
