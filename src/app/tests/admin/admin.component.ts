import { Component, OnInit, ViewChild } from '@angular/core';
import { products } from 'src/app/entities/test';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: products = new products();

  @ViewChild('productsForm')
  productsForm: NgForm;
  constructor(private service: AdminService) {
    this.products = new products();
  }

  ngOnInit() {
  }
  onAdd() {
    const item = { ...this.products };
    if (item.category != null || item.description != null || item.name != null || item.price != null) {
      item.id = Math.random().toString(16).substr(2, 6);
      this.service.addProducts({ ...item });
      console.log(this.products);
      this.productsForm.reset();

    } else {
      alert('-----you werent selected any products----');
    }

  }
  onReset() {
    this.productsForm.reset();
  }
}
