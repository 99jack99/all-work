import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SiteSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { TiendaInicioComponent } from './tienda-inicio/tienda-inicio.component';
import { CarouselHorizontalComponent } from './carousel-horizontal/carousel-horizontal.component';
import { CarouselHorizontalItemComponent } from './carousel-horizontal-item/carousel-horizontal-item.component';
import { CarouselPrincipalComponent } from './carousel-principal/carousel-principal.component';
import { BannerListComponent } from './banner-list/banner-list.component';
import { CatalogoPageComponent } from './catalogo-page/catalogo-page.component';
import { CatalogoItemComponent } from './catalogo-item/catalogo-item.component';
import { StarRaitingComponent } from './star-raiting/star-raiting.component';
import { FavIconPipe } from './../shared/pipes/fav-icon.pipe';
import { StarRatingPipe } from './../shared/pipes/star-rating.pipe';
import { CatalogoProductoPageComponent } from './catalogo-producto-page/catalogo-producto-page.component';



@NgModule({
  imports: [SiteSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent, TiendaInicioComponent, CarouselHorizontalComponent, CarouselHorizontalItemComponent, CarouselPrincipalComponent, BannerListComponent, CatalogoPageComponent, CatalogoItemComponent, StarRaitingComponent, FavIconPipe, StarRatingPipe, CatalogoProductoPageComponent],
})
export class SiteHomeModule { }
