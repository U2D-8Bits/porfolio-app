import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { PrimengModule } from '../primeng/primeng.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    RouterLinkActive
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
