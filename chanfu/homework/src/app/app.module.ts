import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SinIndexComponent } from './sin-index/sin-index.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { HomeindexComponent } from './homeindex/homeindex.component';
import { NewsindexComponent } from './homeindex/newsindex/newsindex.component';
import { ServiceIndexComponent } from './homeindex/service-index/service-index.component';
import { MatIconModule } from '@angular/material/icon';
import { OnlineMeetingComponent } from './homeindex/online-meeting/online-meeting.component';
import { LoginindexComponent } from './loginindex/loginindex.component';
import { SinupComponent } from './sinup/sinup.component';
import { CheckpasswordDirective } from './checkpassword.directive';

@NgModule({
  declarations: [
    AppComponent,
    SinIndexComponent,
    HomeindexComponent,
    NewsindexComponent,
    ServiceIndexComponent,
    OnlineMeetingComponent,
    LoginindexComponent,
    SinupComponent,
    CheckpasswordDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
