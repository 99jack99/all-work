import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SiteSharedModule } from 'app/shared/shared.module';
import { SiteCoreModule } from 'app/core/core.module';
import { SiteAppRoutingModule } from './app-routing.module';
import { SiteHomeModule } from './home/home.module';
import { SiteEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SiteSharedModule,
    SiteCoreModule,
    SiteHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SiteEntityModule,
    SiteAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class SiteAppModule {}
