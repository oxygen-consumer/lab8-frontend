import { Component, OnInit } from '@angular/core';
import { TransactionsApiService } from './transactions-api.service';
import {MatDialog} from "@angular/material/dialog";
import {CarsApiService} from "../cars/cars-api.service";
import {ClientsApiService} from "../clients/clients-api.service";
import {Car} from "../cars/car-interface";
import {Client} from "../clients/client-interface";
import {
  TransactionsAddDialComponent
} from "./transactions-add-dial/transactions-add-dial.component";
import {Transaction} from "./transaction-interface";
import {
  TransactionsEditDialComponent
} from "./transactions-edit-dial/transactions-edit-dial.component";
import {
  TransactionsDelDialComponent
} from "./transactions-del-dial/transactions-del-dial.component";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  constructor(
    private readonly api: TransactionsApiService,
    private readonly carsApi: CarsApiService,
    private readonly clientsApi: ClientsApiService,
    private readonly dialog: MatDialog
  ) {}

  private cars: Car[] = [];
  private clients: Client[] = [];

  ngOnInit(): void {
    this.carsApi.getCars().subscribe((data )=> {this.cars = data});
    this.clientsApi.getClients().subscribe((data) => {this.clients = data});
  }

  public addDial(): void {
    this.dialog
      .open(TransactionsAddDialComponent, {
        data: {cars: this.cars, clients: this.clients}
      })
      .afterClosed()
      .subscribe((data: Transaction) => {
        if (data) {
          this.api.addTransaction(data).subscribe(() => location.reload());
        }
      });
  }

  public editDial(transaction: Transaction): void {
    this.dialog
      .open(TransactionsEditDialComponent, {
        data: {cars: this.cars, clients: this.clients, transaction: transaction}
      })
      .afterClosed()
      .subscribe((data: Transaction) => {
        if (data) {
          this.api.updateTransaction(data).subscribe(() => location.reload());
        }
      })
  }

  public delDial(id: number): void {
    this.dialog
      .open(TransactionsDelDialComponent, {
        data: id,
      })
      .afterClosed()
      .subscribe((data: number) => {
        if (data) {
          this.api.removeTransaction(data).subscribe(() => location.reload());
        }
      })
  }
}
