import { Injectable } from '@angular/core';

@Injectable()
export class ProductServiceService {

  products: string[] = [];

  constructor() { }

  getProducts(): string[] {
    return this.products;
  }

  setProduct(product: string): void {
    this.products.push(product);
  }
  
}
