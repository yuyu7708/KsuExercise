import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {IndexComponent} from "./index/index.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {ResourceApiComponent} from "./Github/resource-api/resource-api.component";

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'index', component: IndexComponent },
  { path: 'github-resource', component:ResourceApiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
