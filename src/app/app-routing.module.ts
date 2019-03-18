import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },*/
 
  {
    path: '',
    loadChildren: './register/register.module#RegisterModule'
  },

  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  /*{
    path: 'landingpage',
    loadChildren: './landingpage/landingpage.module#LandingpageModule'
  },*/
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
