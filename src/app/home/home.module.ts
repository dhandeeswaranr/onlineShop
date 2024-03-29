import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import{ CoreModule} from '../core/core.module'
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
      ])
  ],
  declarations: [HomePage],
  entryComponents:[]
})
export class HomePageModule {}
