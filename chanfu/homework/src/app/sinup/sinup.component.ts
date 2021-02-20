import {EventEmitter,Component, OnInit, Output} from '@angular/core';
import { FormControl,Validators} from "@angular/forms";

@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.css']
})
export class SinupComponent implements OnInit {
  @Output() Onchange: EventEmitter<any> = new EventEmitter();

  mycookies= window.localStorage;
  username = '';
  userpassword = '';
  userphone = '';
  checkuserpassword = '';
  FormControl = new FormControl([this.username, this.userphone, this.userpassword], [
    Validators.required,
    Validators.minLength(2)
  ]);

  constructor() {
  }

  ngOnInit(): void {
  }
  Onsubmit(){
    const Object={ username:this.username, userphone:this.userphone, userpassword:this.userpassword };
    this.mycookies.setItem('lochostdata',JSON.stringify(Object));
    this.Onchange.emit({ok:true});
  }


}
