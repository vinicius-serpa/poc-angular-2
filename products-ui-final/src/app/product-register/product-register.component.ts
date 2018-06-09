import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../model/product-model';
import { ProductDatabaseService } from '../service/product-database.service';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {

  sent: boolean = false;

  _name: string;
  _barcode: string;
  _ncm: string;

  constructor(private databaseService: ProductDatabaseService) { }

  ngOnInit() {
  }

  sendData() {
    let newProduct = new ProductModel(this._name, this._barcode, this._ncm);
    this.databaseService.setProduct(newProduct);
    this.sent = !this.sent;
  }

  back() {
    this._name = '';
    this._barcode = '';
    this._ncm = '';
    this.sent = !this.sent;
  }

}
