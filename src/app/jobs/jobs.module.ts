import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobportalComponent } from './jobportal/jobportal.component';
import { RouterModule } from '@angular/router';
import{MatIconModule, MatCardModule } from '@angular/material'
@NgModule({
  declarations: [JobportalComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: JobportalComponent
      }    
    ]),
  ],
  exports: [JobportalComponent]
})
export class JobsModule { }
