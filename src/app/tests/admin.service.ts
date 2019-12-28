import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  addedProducts: Array<any> = [];

  constructor() { }
  addProducts(item: any) {
    if (localStorage.getItem('products')) {
      this.addedProducts = JSON.parse(localStorage.getItem('products'));
  }
    this.addedProducts.push(item);
    localStorage.setItem('products', JSON.stringify(this.addedProducts));
  }


}
