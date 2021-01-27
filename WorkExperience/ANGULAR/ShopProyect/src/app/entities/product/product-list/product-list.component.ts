import { CategoryService } from '../../category/category.service';
import { ProductService } from './../product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';
import { Category } from '@entities/category/category.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    /*if (this.route.snapshot.paramMap.get('category')) {
      this.category = this.route.snapshot.paramMap.get('category');
    }*/
  }

  ngOnInit(): void {
  }


  getProductByCategory(category: string) {
    //this.products = this.productService.getProductByCategory(category);
  }

  getCount(category: string) {
   // this.count = this.productService.getCount(category);
  }

 /* checkCategory(category: string): Boolean{
    return this.checkCategoryBoolean = this.categoryService.checkCategory(category);
  }

  checkProductList(){
    if(this.checkCategory(this.category)){
      this.getProductByCategory(this.category);
      this.title = this.category;
    } else {
      this.getAllProducts();
      this.title = "Todos los productos";
    }
  }*/

}
