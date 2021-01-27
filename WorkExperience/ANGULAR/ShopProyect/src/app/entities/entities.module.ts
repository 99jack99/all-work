import { FavoritePipe } from '@share/pipes/favorite.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselListComponent } from './carousel/carousel-list/carousel-list.component';

import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryItemComponent } from './category/category-list/category-item/category-item.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { StarComponent } from './product/product-view/star/star.component';
import { ColorComponent } from './product/product-view/color/color.component';
import { SizeComponent } from './size/size-list/size.component';
import { RrssComponent } from '@share/rrss/rrss.component';
import { WhiteListComponent } from './product/product-view/white-list/white-list.component';
import { RouterModule } from '@angular/router';
import { PriceComponent } from '@share/price/price.component';
import { BreadcrumbsComponent } from '@share/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    CarouselListComponent,
    CategoryListComponent,
    CategoryItemComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductViewComponent,
    StarComponent,
    ColorComponent,
    SizeComponent,
    RrssComponent,
    WhiteListComponent,
    FavoritePipe,
    PriceComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CarouselListComponent,
    CategoryListComponent,
    ProductListComponent,
    RrssComponent
  ]
})
export class EntitiesModule { }
