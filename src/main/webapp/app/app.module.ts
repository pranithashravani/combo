import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ComboSharedModule } from 'app/shared/shared.module';
import { ComboCoreModule } from 'app/core/core.module';
import { ComboAppRoutingModule } from './app-routing.module';
import { ComboHomeModule } from './home/home.module';
import { ComboEntityModule } from './entities/entity.module';

// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

import {HttpClientModule} from "@angular/common/http";

import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    BrowserModule,
    ComboSharedModule,
    ComboCoreModule,
    ComboHomeModule,
    HttpClientModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ComboEntityModule,
    ComboAppRoutingModule,
    FormsModule,
    RouterModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent ],
  bootstrap: [JhiMainComponent]
})
export class ComboAppModule {}
