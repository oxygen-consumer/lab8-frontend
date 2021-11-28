import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from '../car-interface';

@Component({
  selector: 'app-cars-add-dial',
  templateUrl: './cars-add-dial.component.html',
  styleUrls: ['./cars-add-dial.component.scss'],
})
export class CarsAddDialComponent implements OnInit {
  public carCreationForm: FormGroup = new FormGroup({
    model: new FormControl('', [Validators.required]),
    year: new FormControl('', [
      Validators.required,
      Validators.min(1900),
      Validators.max(2021),
    ]),
    km: new FormControl('', [Validators.required]),
  });

  get model() {
    return this.carCreationForm.get('model');
  }
  get year() {
    return this.carCreationForm.get('year');
  }
  get km() {
    return this.carCreationForm.get('km');
  }

  constructor(
    private readonly dialogRef: MatDialogRef<CarsAddDialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.carCreationForm.controls['model'].setValue(this.data.model);
      this.carCreationForm.controls['year'].setValue(
        this.data.acquisition_year
      );
      this.carCreationForm.controls['km'].setValue(this.data.kilometers);
    }
  }

  public submit(): void {
    this.dialogRef.close({
      ...(this.data ? this.data : {}),
      model: this.carCreationForm.controls['model'].value,
      acquisition_year: this.carCreationForm.controls['year'].value,
      kilometers: this.carCreationForm.controls['km'].value,
    } as Car);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
