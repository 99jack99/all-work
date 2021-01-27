import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { Location } from '@angular/common';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  idProduct: Number;
  product: Product;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private _location: Location
    ) {
    if (this.route.snapshot.paramMap.get('id')) {
       this.idProduct = +this.route.snapshot.paramMap.get('id');
    }
  }


  back() {
    this._location.back();
  }
  
  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(){
    this.productService.getProductById(this.idProduct).subscribe(product => {
      this.product = product;
    });
  }

}
