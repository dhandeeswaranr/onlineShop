import { NgModule, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {LandingpageModule} from '../landingpage/landingpage.module'
import {HomecontrolModule } from '../homecontrol/homecontrol.module'
@NgModule({
  declarations: [UserRegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    //LandingpageModule,
    FormsModule,
    IonicModule,
   // HomecontrolModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      },
      {
        path:'register',
        component:UserRegisterComponent
      },
      {
        path:'landingpage',
       loadChildren:'../landingpage/landingpage.module#LandingpageModule'
      // loadChildren:'../homecontrol/homecontrol.module#HomecontrolModule'
      }
    ])
  ],
  exports:[
    UserRegisterComponent
  ]
})
export class RegisterModule { 

}
