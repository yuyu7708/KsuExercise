import {Attribute, Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[addConfirmPwd]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmPwdDirective, multi: true }]
})
export class ConfirmPwdDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors {
    return ConfirmPwdValidator(control);
  }
}
export const ConfirmPwdValidator:ValidatorFn=(control :AbstractControl):ValidationErrors | null=>{

  const password = control.get('password');
  const checkpwd = control.get('checkpwd');
  const errorObj = { equalsTo: true };
  if(password && password.dirty && checkpwd.dirty && password.value!==checkpwd.value){
    checkpwd.setErrors(errorObj);
    return errorObj;
  }else if(password && password.dirty && checkpwd.dirty && password.value===checkpwd.value){
    if (checkpwd.errors && 'equalsTo' in checkpwd.errors) {
      delete checkpwd.errors.equalsTo;

      if (Object.keys(checkpwd.errors).length === 0) {
        checkpwd.setErrors(null);
      }
    }
  }
  return null;
}
