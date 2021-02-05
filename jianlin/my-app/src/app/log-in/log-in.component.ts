import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }
  hide = true;
  password = new FormControl('',[
    Validators.required
  ]);
  phone = new FormControl('',[
    Validators.required
  ]);
  ngOnInit(): void {
    this.phone.setValue('0971524933');
  }

}
