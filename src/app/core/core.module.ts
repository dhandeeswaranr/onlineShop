import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HeaderComponent } from './header/header.component';
import {IonicSharedModule } from '../widget/ionic/ionic.module'
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicSharedModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
