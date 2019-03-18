import { Component, OnInit, HostListener, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {
  screenHeight:any;
  screenWidth:any;
  formWidth:any;
  registerForm: FormGroup;
  submitted = false;
  btnEnbl:boolean;
  username;
  password;

//private formBuilder: FormBuilder
  constructor() {
   // this.onResize();
   this.btnEnbl = false;
   }

  ngOnInit() {
    this.formSubmitValue();
    this.onResize();
    this.btnEnbl= false
    if(this.username = "123" && this.password == '123'){
      this.btnEnbl = true;
    }
  }
 ngOnChanges(){
  if(this.username = "123" && this.password == '123'){
    this.btnEnbl = true;
  }

 }
  formSubmitValue(){
   // this.registerForm = this.formBuilder.group({
  console.log("te")
    //});
    if(this.username = "123" && this.password == "123"){
      this.btnEnbl = true;
    }

    
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
