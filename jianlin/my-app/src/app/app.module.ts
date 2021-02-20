import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IndexComponent } from './index/index.component';

import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {MatModule} from './Modules/MatModule';
import {NG_VALIDATORS, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { NewsComponent } from './index/news/news.component';
import { RepairStatusComponent } from './index/repair-status/repair-status.component';
import { MeetComponent } from './index/meet/meet.component';
import { ConfirmPwdDirective } from './Directive/confirm-pwd.directive';




@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    IndexComponent,
    SignInComponent,
    NewsComponent,
    RepairStatusComponent,
    MeetComponent,
    ConfirmPwdDirective
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
