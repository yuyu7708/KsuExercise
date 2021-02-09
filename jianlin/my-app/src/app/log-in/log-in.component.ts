import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor() {}
  navLinks = [
    { link : 'SignIn', label :　'登入' },
    { link : 'SignUp', label :　'註冊' }
  ];
  ngOnInit(): void {
  }
}
