import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{ CoreModule} from '../core/core.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouteReuseStrategy } from '@angular/router';
import {MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule} from '@angular/material';
import{ HomecontrolModule} from '../homecontrol/homecontrol.module'
@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
   // HomecontrolModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    IonicModule,
    //IonicModule.forRoot(),
    CoreModule,
    RouterModule.forChild([
    
      {
        path: '',
        component: LandingPageComponent,
        children: [
          
        /* {
            path: '',
            loadChildren:'../productlist/productlist.module#ProductlistModule'
          }, */
          {
            path:'',
            loadChildren:'../homecontrol/homecontrol.module#HomecontrolModule'
          },
          {
            path:'home',
            loadChildren:'../homecontrol/homecontrol.module#HomecontrolModule'
          },
          {
            path: 'product',
            loadChildren:'../productlist/productlist.module#ProductlistModule'
          },
          {
            path: 'job',
            loadChildren:'../jobs/jobs.module#JobsModule'
          },
          {
            path: 'stock',
            loadChildren:'../stock/stock.module#StockModule'
          }
        ]
      },

      
    ]),
    
  ],
  exports:[
    LandingPageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
})
export class LandingpageModule { }
