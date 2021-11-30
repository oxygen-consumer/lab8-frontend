import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Num } from '../car-interface';

@Component({
  selector: 'app-cars-gen-dial',
  templateUrl: './cars-gen-dial.component.html',
  styleUrls: ['./cars-gen-dial.component.scss'],
})
export class CarsGenDialComponent implements OnInit {
  public carGenerationForm: FormGroup = new FormGroup({
    num: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  get num() {
    return this.carGenerationForm.get('num');
  }

  constructor(private readonly dialogRef: MatDialogRef<CarsGenDialComponent>) {}

  ngOnInit(): void {}

  public submit(): void {
    this.dialogRef.close({
      num: this.carGenerationForm.controls['num'].value,
    } as Num);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
