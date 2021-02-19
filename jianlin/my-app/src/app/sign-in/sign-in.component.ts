import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }
  myStorage = window.localStorage;
  SignInErrorMessage=null;
  SignInError=false;
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(20),
  ]);
  phone = new FormControl('', [Validators.required]);

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
  OnSubmit(){
    const LocalUsers=JSON.parse(this.myStorage.getItem('localusers'));
    if(LocalUsers.phone!=this.phone.value || LocalUsers.password!=this.password.value){
      this.SignInErrorMessage='無此帳號/密碼錯誤，請重新嘗試或註冊新帳號';
      this.SignInError=true;
    }else{
      location.assign('http://localhost:4200/index')
    }
    return false;
  }

}
