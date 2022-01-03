import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Car} from "../../cars/car-interface";
import {Client} from "../../clients/client-interface";
import {Transaction} from "../transaction-interface";

@Component({
  selector: 'app-transactions-edit-dial',
  templateUrl: './transactions-edit-dial.component.html',
  styleUrls: ['./transactions-edit-dial.component.scss']
})
export class TransactionsEditDialComponent implements OnInit {
  public transactionUpdateForm: FormGroup = new FormGroup({
    car: new FormControl('', [Validators.required]),
    client: new FormControl(null),
    parts_price: new FormControl('', [Validators.required]),
    workmanship_price: new FormControl('', [Validators.required]),
  })

  get car() {
    return this.transactionUpdateForm.get('car');
  }

  get client() {
    return this.transactionUpdateForm.get('client');
  }

  get parts_price() {
    return this.transactionUpdateForm.get('parts_price');
  }

  get workmanship_price() {
    return this.transactionUpdateForm.get('workmanship_price');
  }

  constructor(
    private readonly dialogRef: MatDialogRef<TransactionsEditDialComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {cars: Car[], clients: Client[], transaction: Transaction}
  ) { }

  ngOnInit(): void {
    this.transactionUpdateForm.controls['car'].setValue(
      this.data.transaction.car
    );
    this.transactionUpdateForm.controls['client'].setValue(
      this.data.transaction.client
    );
    this.transactionUpdateForm.controls['parts_price'].setValue(
      this.data.transaction.parts_price
    );
    this.transactionUpdateForm.controls['workmanship_price'].setValue(
      this.data.transaction.workmanship_price
    );
  }

  public submit(): void {
    this.dialogRef.close({
      ...this.data.transaction,
      car: this.transactionUpdateForm.controls['car'].value,
      client: this.transactionUpdateForm.controls['client'].value,
      parts_price: this.transactionUpdateForm.controls['parts_price'].value,
      workmanship_price: this.transactionUpdateForm.controls['workmanship_price'].value,
    })
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
