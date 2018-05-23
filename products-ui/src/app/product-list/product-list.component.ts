import { Component, OnInit } from '@angular/core';

import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductServiceService]
})
export class ProductListComponent implements OnInit {

  products: string[];
  product: string;

  constructor(private service: ProductServiceService) {
    this.products = this.service.getProducts();
  }

  ngOnInit() {
  }

  sendProduct() {
    this.service.setProduct(this.product);
  }

  list() { }

}
