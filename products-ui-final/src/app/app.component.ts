import { Component } from '@angular/core';
import { ProductDatabaseService } from './service/product-database.service';
import { ProductModel } from './model/product-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Products';

  selectedProduct: ProductModel;
  
  constructor(private dataBaseService: ProductDatabaseService){}

  sendDetail(id): void {
    this.selectedProduct = this.dataBaseService.getProduct(id);
  }
}
