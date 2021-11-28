import { Component, OnInit } from '@angular/core';
import { CarsApiService } from './cars-api.service';
import { MatDialog } from '@angular/material/dialog';
import { CarsAddDialComponent } from './cars-add-dial/cars-add-dial.component';
import { CarsGenDialComponent } from './cars-gen-dial/cars-gen-dial.component';
import { Car } from './car-interface';
import { Num } from './car-interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  constructor(
    private readonly api: CarsApiService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  public addDial(): void {
    this.dialog
      .open(CarsAddDialComponent)
      .afterClosed()
      .subscribe((data: Car) => {
        if (data) {
          this.api.addCar(data).subscribe(() => location.reload());
        }
      });
  }

  public genDial(): void {
    this.dialog
      .open(CarsGenDialComponent)
      .afterClosed()
      .subscribe((data: Num) => {
        if (data) {
          this.api.genCars(data).subscribe(() => location.reload());
        }
      });
  }
}
