import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [],
  exports:      [ CommonModule, BrowserAnimationsModule, MatTabsModule
    , MatButtonModule, MatCardModule, MatInputModule, MatCheckboxModule, MatIconModule, MatSelectModule
  ]
})
export class MatModule { }
