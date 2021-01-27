import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@entities/product/product.model';
import { ProductService } from '@entities/product/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: Product[];
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

}
