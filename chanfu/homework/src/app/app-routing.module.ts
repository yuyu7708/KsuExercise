import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinIndexComponent } from './sin-index/sin-index.component';
import { HomeindexComponent } from './homeindex/homeindex.component';

const routes: Routes = [
  { path: 'signage', component: SinIndexComponent },
  { path: 'homeindex', component: HomeindexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
