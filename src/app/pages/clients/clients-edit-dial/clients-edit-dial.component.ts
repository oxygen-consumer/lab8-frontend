import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { blacklistValidator } from '../blacklist.validator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../client-interface';

@Component({
  selector: 'app-clients-edit-dial',
  templateUrl: './clients-edit-dial.component.html',
  styleUrls: ['./clients-edit-dial.component.scss'],
})
export class ClientsEditDialComponent implements OnInit {
  public clientUpdateForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    CNP: new FormControl('', [
      Validators.required,
      Validators.min(1000000000000),
      Validators.max(9999999999999),
      blacklistValidator(this.data.cnpBlacklist),
    ]),
    birth_date: new FormControl('', [Validators.required]),
  });

  get first_name() {
    return this.clientUpdateForm.get('first_name');
  }
  get last_name() {
    return this.clientUpdateForm.get('last_name');
  }
  get CNP() {
    return this.clientUpdateForm.get('CNP');
  }
  get birth_date() {
    return this.clientUpdateForm.get('birth_date');
  }

  minDate: Date;
  maxDate: Date;

  constructor(
    private readonly dialogRef: MatDialogRef<ClientsEditDialComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: { client: Client; cnpBlacklist: number[] }
  ) {
    this.minDate = new Date(1900, 0, 1);
    this.maxDate = new Date();
  }

  ngOnInit(): void {
    this.clientUpdateForm.controls['first_name'].setValue(
      this.data.client.first_name
    );
    this.clientUpdateForm.controls['last_name'].setValue(
      this.data.client.last_name
    );
    this.clientUpdateForm.controls['CNP'].setValue(this.data.client.CNP);
    this.clientUpdateForm.controls['birth_date'].setValue(
      this.data.client.birth_date
    );
  }

  public submit(): void {
    this.dialogRef.close({
      first_name: this.clientUpdateForm.controls['first_name'].value,
      last_name: this.clientUpdateForm.controls['last_name'].value,
      CNP: this.clientUpdateForm.controls['CNP'].value,
      birth_date: this.clientUpdateForm.controls['birth_date'].value,
    } as Client);
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
