import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {apiService} from "../../service/api.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})



export class SignUpComponent implements OnInit {
  @Output() OnSignup: EventEmitter<any> = new EventEmitter();
  ValidationErrorMessage=null;
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
  constructor(private fb: FormBuilder ,private http:HttpClient,private  formBuilder:FormBuilder,private Api:apiService) {}

  ngOnInit() {

  }
  get name(){ return this.myform.get('name');}
  get phone(){ return this.myform.get('phone');}
  get addr(){ return this.myform.get('addr');}
  get password(){ return this.myform.get('password');}
  get checkpwd(){ return this.myform.get('checkpwd');}

  OnSubmit(){
    //取表單資料並建立formdata
    const formdata=new FormData();
    const formkeys=Object.keys(this.myform.value);
    formkeys.forEach(keys=>{
      const formvalue=this.myform.get(keys).value;
      formdata.append(keys,formvalue)
    });
    //api
    this.Api.signup_post(formdata).subscribe(rep=>{
      if(rep!=true){
        Object.keys(rep).forEach(keys=>{
          rep[keys].forEach(index=>{
            if(index=='unique' && keys=='phone'){
              this.ValidationErrorMessage='門號已被註冊'
            }else if(index=='unique' && keys=='name'){
              this.ValidationErrorMessage='名稱已被使用'
            }
            alert(this.ValidationErrorMessage);
          })
        })
      }else{
        alert('註冊成功!');
        this.OnSignup.emit({signUp:true});
      }
    })
  }
}
