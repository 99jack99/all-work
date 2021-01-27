import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatalogoPageComponent } from 'app/home/catalogo-page/catalogo-page.component';
import { CatalogoProductoPageComponent } from 'app/home/catalogo-producto-page/catalogo-producto-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'articulo',
        loadChildren: () => import('./articulo/articulo.module').then(m => m.SiteArticuloModule),
      },
      {
        path: 'categoria-articulo',
        loadChildren: () => import('./categoria-articulo/categoria-articulo.module').then(m => m.SiteCategoriaArticuloModule),
      },
      {
        path: 'colores',
        loadChildren: () => import('./colores/colores.module').then(m => m.SiteColoresModule),
      },
      {
        path: 'info',
        loadChildren: () => import('./info/info.module').then(m => m.SiteInfoModule),
      },
      {
        path: 'banner',
        loadChildren: () => import('./banner/banner.module').then(m => m.SiteBannerModule),
      },
      {
        path: 'catalogo',
        component: CatalogoPageComponent
      },{
        path: 'catalogo/:id',
        component: CatalogoProductoPageComponent
      }

      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class SiteEntityModule {}
