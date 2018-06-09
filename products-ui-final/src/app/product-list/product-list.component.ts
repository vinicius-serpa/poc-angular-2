import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../model/product-model';
import { ProductDatabaseService } from '../service/product-database.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: ProductModel[] = [];
  @Output() selectedId = new EventEmitter();

  constructor(private databaseService: ProductDatabaseService) { }

  ngOnInit() {
    this.databaseService.sendProduct.subscribe(products => this.productList = products);
  }

  selectedProduct(item: number) {
    this.selectedId.emit(item);
  }

}
