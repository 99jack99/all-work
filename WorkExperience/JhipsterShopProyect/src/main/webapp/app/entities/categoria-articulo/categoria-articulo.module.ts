import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SiteSharedModule } from 'app/shared/shared.module';
import { CategoriaArticuloComponent } from './categoria-articulo.component';
import { CategoriaArticuloDetailComponent } from './categoria-articulo-detail.component';
import { CategoriaArticuloUpdateComponent } from './categoria-articulo-update.component';
import { CategoriaArticuloDeleteDialogComponent } from './categoria-articulo-delete-dialog.component';
import { categoriaArticuloRoute } from './categoria-articulo.route';

@NgModule({
  imports: [SiteSharedModule, RouterModule.forChild(categoriaArticuloRoute)],
  declarations: [
    CategoriaArticuloComponent,
    CategoriaArticuloDetailComponent,
    CategoriaArticuloUpdateComponent,
    CategoriaArticuloDeleteDialogComponent,
  ],
  entryComponents: [CategoriaArticuloDeleteDialogComponent],
})
export class SiteCategoriaArticuloModule {}
