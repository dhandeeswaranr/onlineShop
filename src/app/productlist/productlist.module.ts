import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { RouterModule } from '@angular/router';
import{ FormsModule } from '@angular/forms'
import{Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonService} from '../service/common.service';
import {MatCardModule} from '@angular/material';
import {IonicSharedModule } from '../widget/ionic/ionic.module'
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [ListingComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicSharedModule,
    IonicModule,
    MatCardModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListingComponent 
      },
      {
        path: 'product',
        component: ListingComponent 
      }
      
    ]),
  ],
  exports:[
    ListingComponent
  ],
  providers:[CommonService]
})
export class ProductlistModule { }
