import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductViewComponent } from '@entities/product/product-view/product-view.component';
import { AdminProductFormComponent } from './admin/product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './admin/product/admin-product-list/admin-product-list.component';
import { HomeComponent } from './main/home/home.component';
import { ShopComponent } from './main/shop/shop.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path:'home', 
    component: HomeComponent
  },
  {
    path:'shop', 
    component: ShopComponent
  },
  {
    path:'shop/:category', 
    component: ShopComponent
  },
  {
    path:'shop/product/view/:id', 
    component: ProductViewComponent
  },
  {
    path:'admin/product-list', 
    component: AdminProductListComponent
  },
  {
    path:'admin/product-form', 
    component: AdminProductFormComponent
  },
  {
    path:'admin/product-form/:id', 
    component: AdminProductFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
