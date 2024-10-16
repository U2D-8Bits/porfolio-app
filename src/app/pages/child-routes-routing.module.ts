import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';

const routes: Routes = [
  { path: '', component: DashboardPageComponent, data: { title: 'Dashboard' } },
  { path: 'about', component: AboutPageComponent, data: { title: 'About' } },
  {
    path: 'history',
    component: HistoryPageComponent,
    data: { title: 'History' },
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildRoutesRoutingModule {}
