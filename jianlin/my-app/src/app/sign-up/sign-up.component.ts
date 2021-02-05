import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
  name = new FormControl('', [
    Validators.required
  ]);
  phone = new FormControl('', [
    Validators.required
  ]);
  addr = new FormControl('', [
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required
  ]);
  Checkpwd = new FormControl('', [
    Validators.required
  ]);
  ngOnInit(): void {
  }

}
