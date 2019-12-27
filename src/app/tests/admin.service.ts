import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  addedProducts: Array<any> = [];

  constructor() { }
  addProducts(item: any) {
    this.addedProducts.push(item);
  }
  getProducts() {
   return this.addedProducts;
  }

}
