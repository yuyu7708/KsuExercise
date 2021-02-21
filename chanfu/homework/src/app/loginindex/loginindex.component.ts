import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-loginindex',
  templateUrl: './loginindex.component.html',
  styleUrls: ['./loginindex.component.css']
})
export class LoginindexComponent implements OnInit {
  mycookies= window.localStorage;
// login
  uaccount = '';
  upassword = '';
  errostatus: boolean;
  loginerro: string;
  FormControl = new FormControl('uaccount', [
    Validators.required,
    Validators.minLength(2)
  ]);
  constructor() { }

  ngOnInit(): void {
  }
  Onsubmit(){
    const userdata=JSON.parse(this.mycookies.getItem('lochostdata'));
    if(this.uaccount == userdata.userphone){
      if(this.upassword == userdata.userpassword){
        location.assign('http://localhost:4200/homeindex')
      }
      else{
        this.errostatus = true;
        this.loginerro = '登入錯誤，請重新輸入帳密';
      }
    }
  }
}
