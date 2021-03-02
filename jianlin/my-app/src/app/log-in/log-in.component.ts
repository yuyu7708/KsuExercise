import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor() {}
  LinkActive=0;
  ngOnInit(): void {

  }
  getSignup(data: any){
    if(data.signUp){
      this.LinkActive=0;
    }
  }
}
