import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page/about-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutPageComponent,
    DashboardPageComponent,
    HistoryPageComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    AboutPageComponent,
    DashboardPageComponent,
    HistoryPageComponent,
    PagesComponent,
  ]
})
export class PagesModule { }
