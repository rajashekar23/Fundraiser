import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  searchText: any;
  products: Array<any> = [];
  totalAmount = 0;
  constructor(private service: AdminService) {
    this.products = JSON.parse(localStorage.getItem('products'));
  }

  ngOnInit() {
    this.products.forEach(item => {
      this.totalAmount += Number(item.price);
    });
    console.log(this.totalAmount);
  }
  onDelete(index: number, product: any) {
    this.products.splice(this.products.indexOf(index), 1);
    this.totalAmount -= product.price;
    console.log(this.totalAmount);
  }
}
