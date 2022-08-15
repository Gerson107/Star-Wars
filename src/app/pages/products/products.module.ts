import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { MaterialModule } from 'src/app/material.module';
import { CharactersDetailComponent } from '../characters/characters-detail/characters-detail.component';
import { CharactersDetailModule } from '../characters/characters-detail/characters-detail.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
  
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    CharactersDetailModule,
  ],
 

})
export class ProductsModule { }
