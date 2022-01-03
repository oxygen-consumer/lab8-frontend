import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-transactions-del-dial',
  templateUrl: './transactions-del-dial.component.html',
  styleUrls: ['./transactions-del-dial.component.scss']
})
export class TransactionsDelDialComponent implements OnInit {

  constructor(
    private readonly dialogRef: MatDialogRef<TransactionsDelDialComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
  ) { }

  ngOnInit(): void {
  }

  public confirm(): void {
    this.dialogRef.close(this.id);
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
