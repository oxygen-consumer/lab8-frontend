import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cars-del-dial',
  templateUrl: './cars-del-dial.component.html',
  styleUrls: ['./cars-del-dial.component.scss'],
})
export class CarsDelDialComponent implements OnInit {
  constructor(
    private readonly dialogRef: MatDialogRef<CarsDelDialComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number
  ) {}

  ngOnInit(): void {}

  public confirm(): void {
    this.dialogRef.close(this.id);
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
