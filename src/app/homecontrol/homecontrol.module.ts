import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstviewComponent } from './firstview/firstview.component';
import {IonicSharedModule } from '../widget/ionic/ionic.module'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FirstviewComponent],
  imports: [
    CommonModule,
    IonicSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: FirstviewComponent
      },
      {
        path:'product',
        loadChildren:'../productlist/productlist.module#ProductlistModule'
      },
      {
        path: 'job',
        loadChildren:'../jobs/jobs.module#JobsModule'
      },

    ]),
    ],
  exports:[
    FirstviewComponent
  ]
})
export class HomecontrolModule { }
