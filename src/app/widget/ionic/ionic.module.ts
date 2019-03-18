import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


const fromIonicModules = [
  IonicModule,

]

const fromIonicWidget = [
  SplashScreen,
  StatusBar
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    fromIonicModules,
    IonicModule
  ],
  exports:[
    fromIonicModules,
    IonicModule
    
  ]
})
export class IonicSharedModule { }
