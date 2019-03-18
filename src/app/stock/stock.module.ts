import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockdetailsComponent } from './stockdetails/stockdetails.component';
import { RouterModule } from '@angular/router';
import{ FormsModule} from '@angular/forms';
import { CommonService } from '../service/common.service';
import{ IonicSharedModule} from '../widget/ionic/ionic.module'
@NgModule({
  declarations: [StockdetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: StockdetailsComponent
      }
  ])],
  exports:[StockdetailsComponent],
  providers:[CommonService]
})
export class StockModule { }
