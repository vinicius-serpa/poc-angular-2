import { Injectable, EventEmitter } from '@angular/core';

import { ProductModel } from '../model/product-model'

@Injectable()
export class ProductDatabaseService {

  myProducts: ProductModel[] = [];
  sendProduct = new EventEmitter();

  constructor() { }

  setProduct(newProduct: ProductModel): void {
    this.myProducts.push(newProduct);
    this.sendProduct.emit(this.myProducts);
  }

  getProduct(id: number): ProductModel {
    let product: ProductModel;
    product = this.myProducts[id];
    return product;
  }

}
