import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { TransactionsApiService } from '../transactions-api.service';
import {MatTableDataSource} from "@angular/material/table";
import {Transaction} from "../transaction-interface";

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {
  @Output() launchEdit: EventEmitter<Transaction> = new EventEmitter<Transaction>();
  @Output() launchDel: EventEmitter<number> = new EventEmitter<number>();

  dataSource!: MatTableDataSource<Transaction>;
  columnsToDisplay = [
    'id',
    'car',
    'client',
    'time',
    'total_price',
    'total_discount',
    'actions',
  ]

  constructor(
    private api: TransactionsApiService,
  ) { }

  ngOnInit(): void {
    this.api.getTransactions().subscribe((x) => {
      this.dataSource = new MatTableDataSource(x);
    })
  }
}
