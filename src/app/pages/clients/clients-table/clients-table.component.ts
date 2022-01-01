import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../client-interface';
import { ClientsApiService } from '../clients-api.service';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss'],
})
export class ClientsTableComponent implements AfterViewInit {
  @Output() launchEdit: EventEmitter<Client> = new EventEmitter<Client>();
  @Output() launchDel: EventEmitter<number> = new EventEmitter<number>();

  dataSource!: MatTableDataSource<Client>;
  columnsToDisplay = [
    'id',
    'name',
    'CNP',
    'birth_date',
    'join_date',
    'discount',
    'actions',
  ];

  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private api: ClientsApiService) {}

  ngAfterViewInit(): void {
    this.api.getClients().subscribe((x) => {
      this.dataSource = new MatTableDataSource(x);
      this.dataSource.sort = this.matSort;
    });
  }
}
