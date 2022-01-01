import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-clients-del-dial',
  templateUrl: './clients-del-dial.component.html',
  styleUrls: ['./clients-del-dial.component.scss'],
})
export class ClientsDelDialComponent implements OnInit {
  constructor(
    private readonly dialogRef: MatDialogRef<ClientsDelDialComponent>,
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
