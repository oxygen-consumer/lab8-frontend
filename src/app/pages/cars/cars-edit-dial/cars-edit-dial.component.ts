import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from '../car-interface';

@Component({
  selector: 'app-cars-edit-dial',
  templateUrl: './cars-edit-dial.component.html',
  styleUrls: ['./cars-edit-dial.component.scss'],
})
export class CarsEditDialComponent implements OnInit {
  public carUpdateForm: FormGroup = new FormGroup({
    model: new FormControl('', [Validators.required]),
    year: new FormControl('', [
      Validators.required,
      Validators.min(1900),
      Validators.max(2021),
    ]),
    km: new FormControl('', [Validators.required]),
  });

  get model() {
    return this.carUpdateForm.get('model');
  }
  get year() {
    return this.carUpdateForm.get('year');
  }
  get km() {
    return this.carUpdateForm.get('km');
  }

  constructor(
    private readonly dialogRef: MatDialogRef<CarsEditDialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) {}

  ngOnInit(): void {
    this.carUpdateForm.controls['model'].setValue(this.data.model);
    this.carUpdateForm.controls['year'].setValue(this.data.acquisition_year);
    this.carUpdateForm.controls['km'].setValue(this.data.kilometers);
  }

  public submit(): void {
    this.dialogRef.close({
      ...(this.data ? this.data : {}),
      model: this.carUpdateForm.controls['model'].value,
      acquisition_year: this.carUpdateForm.controls['year'].value,
      kilometers: this.carUpdateForm.controls['km'].value,
    } as Car);
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
