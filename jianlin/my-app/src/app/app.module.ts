import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IndexComponent } from './index/index.component';

import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {MatModule} from './Modules/MatModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormModule} from './Modules/FormModule';
import {ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    BrowserAnimationsModule,
    FormModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
