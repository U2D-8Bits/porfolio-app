import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
