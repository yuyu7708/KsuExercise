import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {apiService} from "../../service/api.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private api:apiService) {
  }
  myStorage = window.localStorage;
  SignInErrorMessage=null;
  SignInError=false;
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(20),
  ]);
  phone = new FormControl('', [Validators.required,Validators.minLength(9)]);

  ngOnInit(): void {

  }
  hide = true;
  PhoneErrorMessage(){
    if (this.phone.hasError('required')) {
      return '請輸入手機號碼';
    }
    return '無效手機號碼';
  }
  PasswordErrorMessage(){
    if (this.password.hasError('required')) {
      return '請輸入密碼4-20字元';
    }else if(this.password.errors?.minlength){
      return '密碼不足4個字元';
    }
    return '無效密碼';
  }
  //登入
  OnSubmit(){

    this.api.signin_post({phone:''}).subscribe(rep=>{
      console.log(rep)
    })

    return false;
  }
  //submit是否disabled
  get verification(){
    if(this.password.valid && this.phone.valid){
      //phone & password格式正確
      return true;
    }else{
      return false;
    }
  }

}
