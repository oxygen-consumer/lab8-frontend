import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  constructor(
    private readonly dialogRef: MatDialogRef<CarsGenDialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  ngOnInit(): void {
    this.carGenerationForm.controls['num'].setValue(this.data);
  }

  public submit(): void {
    this.dialogRef.close(this.data);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
