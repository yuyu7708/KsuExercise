import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[equalsTo]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator{

  @Input('equalsTo') equalsTo: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const controlValue = control.value; //control值
    const compareToCtrl = control.parent?.get(this.equalsTo) // 讀取被比較值
    const errorObj = {equalsTo: {valid: false}};

    if (compareToCtrl && control.dirty && compareToCtrl.dirty && controlValue !== compareToCtrl.value) {
      //不相同，設定setErrors附上errorObj
      control.setErrors(errorObj);
      return errorObj;
    } else if (compareToCtrl && control.dirty && compareToCtrl.dirty && controlValue === compareToCtrl.value) {
      //相同，移除errors
      delete control.errors?.equalsTo;
      control.setErrors(null);


    }
    return null;
  }

}


