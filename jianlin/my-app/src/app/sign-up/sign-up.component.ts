import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import validate = WebAssembly.validate;


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
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
    checkpwd:['',Validators.required]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.myform.valueChanges.subscribe(console.log);
  }
  get name(){ return this.myform.get('name');}
  get phone(){ return this.myform.get('phone');}
  get addr(){ return this.myform.get('addr');}
  get password(){ return this.myform.get('password');}
  get checkpwd(){ return this.myform.get('checkpwd');}

  OnSubmit(){
    const userData=JSON.stringify(this.myform.value);
    const Data=[];

    if(this.myStorage.getItem('localusers')){
      
    }
    alert('註冊成功!');
    this.myStorage.setItem('localusers',userData);
  }
}
