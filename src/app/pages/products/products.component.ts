import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';


@Component({
  selector: 'app-products',
  template: `
  <section class="product">
    <app-product
     [product]="product" *ngFor="let product of products"></app-product>
</section>
  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private productSvc: ProductsService, ) { }

  ngOnInit(): void {
    this.productSvc.getProducts().pipe( tap( (products: any) => this.products = products.results)).subscribe()
  }

}
//tap( (products: Product[]) => this.products = products)