import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SiteSharedModule } from 'app/shared/shared.module';
import { ColoresComponent } from './colores.component';
import { ColoresDetailComponent } from './colores-detail.component';
import { ColoresUpdateComponent } from './colores-update.component';
import { ColoresDeleteDialogComponent } from './colores-delete-dialog.component';
import { coloresRoute } from './colores.route';

@NgModule({
  imports: [SiteSharedModule, RouterModule.forChild(coloresRoute)],
  declarations: [ColoresComponent, ColoresDetailComponent, ColoresUpdateComponent, ColoresDeleteDialogComponent],
  entryComponents: [ColoresDeleteDialogComponent],
})
export class SiteColoresModule {}
