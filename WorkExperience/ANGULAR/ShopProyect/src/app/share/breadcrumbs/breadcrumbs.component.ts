import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from '@entities/product/product.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() product: Product;

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  back() {
    this._location.back();
  }

}
