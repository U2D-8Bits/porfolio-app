import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';

const routes: Routes = [

  {
    path: 'dashboard',
    component: PagesComponent,
    loadChildren: () => import('./child-routes-routing.module').then(m => m.ChildRoutesRoutingModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
