import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[appCheckpassword]',
  providers: [{ provide:NG_VALIDATORS, useExisting:CheckpasswordDirective,multi:true }]
})
export class CheckpasswordDirective {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors{
    return  chekpwd(control);
  }

}
export const chekpwd:ValidatorFn=(control:AbstractControl) :ValidationErrors | null =>{

  const upwd = control.get('userpassword');
  const ckupwd = control.get('checkuserpassword');
  // console.log(control.get('checkuserpassword')?.value);
  if ( upwd && upwd.dirty && ckupwd.dirty && ckupwd?.value != upwd?.value){
    ckupwd?.setErrors({ haveerro : true });
    return { haveerro : true };
  }
  else if(upwd && upwd.dirty && ckupwd.dirty && ckupwd?.value == upwd?.value){
    delete ckupwd?.errors.haveerro;
    ckupwd?.setErrors(null);
  }
  return null;

}
