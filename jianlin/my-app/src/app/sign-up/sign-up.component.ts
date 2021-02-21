import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import { ConfirmPwdValidator} from "../Directive/confirm-pwd.directive";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})



export class SignUpComponent implements OnInit {
  @Output() OnSignup: EventEmitter<any> = new EventEmitter();

  myStorage = window.localStorage;

  myform=this.fb.group({
    name:['',[
      Validators.required,Validators.maxLength(10)
    ]],
    phone:['',[
      Validators.required,Validators.minLength(9)
    ]],
    addr:['',Validators.required],
    password:['',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]],
    checkpwd:['',
     [ Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
     ]
    ],
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.myform.valueChanges.subscribe(()=>{
    //   console.log(this.myform.get('checkpwd'));
    // });

  }
  get name(){ return this.myform.get('name');}
  get phone(){ return this.myform.get('phone');}
  get addr(){ return this.myform.get('addr');}
  get password(){ return this.myform.get('password');}
  get checkpwd(){ return this.myform.get('checkpwd');}

  OnSubmit(){
    //取表單資料
    const userData=JSON.stringify(this.myform.value);
    console.log(this.myform.value)
    //存localStorage
    this.myStorage.setItem('localusers',userData);
    alert('註冊成功!');
    this.OnSignup.emit({signUp:true});
  }
}
