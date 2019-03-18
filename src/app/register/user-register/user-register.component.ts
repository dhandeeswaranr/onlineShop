import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  screenHeight:any;
  screenWidth:any;
  formWidth:any;
  registerForm: FormGroup;
  submitted = false;
//private formBuilder: FormBuilder
  constructor() {
   // this.onResize();
   }

  ngOnInit() {
    this.formSubmitValue();
    this.onResize();
  }

  formSubmitValue(){
   // this.registerForm = this.formBuilder.group({

    //});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) 
  {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.formWidth = this.screenWidth - 100;
    console.log(this.screenHeight);
  }



}
