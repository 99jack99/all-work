import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//main
import { HomeComponent } from '@main/home/home.component';
import { ShopComponent } from '@main/shop/shop.component';

//share
import { HeaderComponent } from '@share/header/header.component';
import { FooterComponent } from '@share/footer/footer.component';

//module entities
import { EntitiesModule } from '@entities/entities.module';

import { HttpClientModule } from '@angular/common/http';
import { AsideComponent } from './share/aside/aside.component';
import { AdminProductListComponent } from './admin/product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './admin/product/admin-product-form/admin-product-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    AdminProductListComponent,
    AdminProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EntitiesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
