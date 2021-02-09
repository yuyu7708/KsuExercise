import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

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

}
