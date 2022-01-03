import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Car} from "../../cars/car-interface";
import {Client} from "../../clients/client-interface";

@Component({
  selector: 'app-transactions-add-dial',
  templateUrl: './transactions-add-dial.component.html',
  styleUrls: ['./transactions-add-dial.component.scss']
})
export class TransactionsAddDialComponent implements OnInit {
  public transactionCreationForm: FormGroup = new FormGroup({
    car: new FormControl('', [Validators.required]),
    client: new FormControl(null),
    parts_price: new FormControl('', [Validators.required]),
    workmanship_price: new FormControl('', [Validators.required]),
  })

  get car() {
    return this.transactionCreationForm.get('car');
  }

  get client() {
    return this.transactionCreationForm.get('client');
  }

  get parts_price() {
    return this.transactionCreationForm.get('parts_price');
  }

  get workmanship_price() {
    return this.transactionCreationForm.get('workmanship_price');
  }

  constructor(
    private readonly dialogRef: MatDialogRef<TransactionsAddDialComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {cars: Car[], clients: Client[]}
  ) { }

  ngOnInit(): void {
  }

  public submit(): void {
    this.dialogRef.close({
      car: this.transactionCreationForm.controls['car'].value,
      client: this.transactionCreationForm.controls['client'].value,
      parts_price: this.transactionCreationForm.controls['parts_price'].value,
      workmanship_price: this.transactionCreationForm.controls['workmanship_price'].value,
    })
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
