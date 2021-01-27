import { Component, OnInit } from '@angular/core';
import { Product } from '@entities/product/product.model';
import { ProductService } from '@entities/product/product.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }
}
