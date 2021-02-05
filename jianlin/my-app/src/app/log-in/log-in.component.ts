import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor() {}
  hide = true;
  password = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
  ]);
  phone = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.hide = true;
  }
  PhoneErrorMessage(){
    if (this.phone.hasError('required')) {
      return '請填寫手機號碼';
    }
    return '無效手機號碼';
  }
  PasswordErrorMessage(){
    if (this.password.hasError('required')) {
      return '請填寫手機號碼';
    }else if(this.password.errors?.minlength){
      return '密碼不足4個字元';
    }
    return '無效密碼';
  }

}
