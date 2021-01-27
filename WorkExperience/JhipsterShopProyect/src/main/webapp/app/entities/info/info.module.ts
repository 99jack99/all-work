import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SiteSharedModule } from 'app/shared/shared.module';
import { InfoComponent } from './info.component';
import { InfoDetailComponent } from './info-detail.component';
import { InfoUpdateComponent } from './info-update.component';
import { InfoDeleteDialogComponent } from './info-delete-dialog.component';
import { infoRoute } from './info.route';

@NgModule({
  imports: [SiteSharedModule, RouterModule.forChild(infoRoute)],
  declarations: [InfoComponent, InfoDetailComponent, InfoUpdateComponent, InfoDeleteDialogComponent],
  entryComponents: [InfoDeleteDialogComponent],
})
export class SiteInfoModule {}
