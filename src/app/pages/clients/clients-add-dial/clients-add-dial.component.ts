import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { blacklistValidator } from '../blacklist.validator';
import { Client } from '../client-interface';

@Component({
  selector: 'app-cars-add-dial',
  templateUrl: './clients-add-dial.component.html',
  styleUrls: ['./clients-add-dial.component.scss'],
})
export class ClientsAddDialComponent implements OnInit {
  public clientCreationForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    CNP: new FormControl('', [
      Validators.required,
      Validators.min(1000000000000),
      Validators.max(9999999999999),
      blacklistValidator(this.data),
    ]),
    birth_date: new FormControl('', [Validators.required]),
  });

  get first_name() {
    return this.clientCreationForm.get('first_name');
  }
  get last_name() {
    return this.clientCreationForm.get('last_name');
  }
  get CNP() {
    return this.clientCreationForm.get('CNP');
  }
  get birth_date() {
    return this.clientCreationForm.get('birth_date');
  }

  minDate: Date;
  maxDate: Date;

  constructor(
    private readonly dialogRef: MatDialogRef<ClientsAddDialComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: number[]
  ) {
    this.minDate = new Date(1900, 0, 1);
    this.maxDate = new Date();
  }

  ngOnInit(): void {}

  public submit(): void {
    this.dialogRef.close({
      first_name: this.clientCreationForm.controls['first_name'].value,
      last_name: this.clientCreationForm.controls['last_name'].value,
      CNP: this.clientCreationForm.controls['CNP'].value,
      birth_date: this.clientCreationForm.controls['birth_date'].value,
    } as Client);
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
