import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function blacklistValidator(blacklist: number[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return blacklist.includes(control.value)
      ? { blacklisted: { value: control.value } }
      : null;
  };
}
