import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  exports:[
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MenuModule,
  ]
})
export class PrimengModule { }
