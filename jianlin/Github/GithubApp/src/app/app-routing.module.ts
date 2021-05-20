import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'Index',
    pathMatch:'full',
  },
  { path: 'Index', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  { path: 'Login', loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
