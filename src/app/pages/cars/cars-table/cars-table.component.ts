import { Component, OnInit } from '@angular/core';
import { Car } from '../car-interface';
import { CarsApiService } from '../cars-api.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss'],
})
export class CarsTableComponent implements OnInit {
  data: Car[] = [];
  sortedData: Car[] = [];
  columnsToDisplay = [
    'id',
    'model',
    'acquisition_year',
    'kilometers',
    'on_warranty',
    'workmanship_sum',
  ];

  constructor(private api: CarsApiService) {
    this.api.getCars().subscribe((x) => {
      this.data = x;
    });
    this.sortedData = this.data.slice();
  }

  sortData(sort: Sort) {
    const dataSliced = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = dataSliced;
      return;
    }

    this.sortedData = dataSliced.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'workmanship_sum':
          return compare(a.workmanship_sum, b.workmanship_sum, isAsc);
        default:
          return 0;
      }
    });
  }

  ngOnInit(): void {}
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
