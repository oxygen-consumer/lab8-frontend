import {
  AfterViewInit,
  Component,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Car } from '../car-interface';
import { CarsApiService } from '../cars-api.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss'],
})
export class CarsTableComponent implements AfterViewInit {
  @Output() launchEdit: EventEmitter<Car> = new EventEmitter<Car>();
  @Output() launchDel: EventEmitter<number> = new EventEmitter<number>();

  dataSource!: MatTableDataSource<Car>;
  columnsToDisplay = [
    'id',
    'model',
    'acquisition_year',
    'kilometers',
    'on_warranty',
    'workmanship_sum',
    'actions',
  ];

  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private api: CarsApiService) {}

  ngAfterViewInit(): void {
    this.api.getCars().subscribe((x) => {
      this.dataSource = new MatTableDataSource(x);
      this.dataSource.sort = this.matSort;
    });
  }
}
