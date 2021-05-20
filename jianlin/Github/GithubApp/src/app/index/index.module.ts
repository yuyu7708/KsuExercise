import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
