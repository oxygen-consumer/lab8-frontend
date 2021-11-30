import { Component, OnInit } from '@angular/core';
import { CarsApiService } from './cars-api.service';
import { MatDialog } from '@angular/material/dialog';
import { CarsAddDialComponent } from './cars-add-dial/cars-add-dial.component';
import { CarsGenDialComponent } from './cars-gen-dial/cars-gen-dial.component';
import { Car, Num } from './car-interface';
import { CarsDelDialComponent } from './cars-del-dial/cars-del-dial.component';
import { CarsEditDialComponent } from './cars-edit-dial/cars-edit-dial.component';

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

  public editDial(car: Car): void {
    this.dialog
      .open(CarsEditDialComponent, { data: car })
      .afterClosed()
      .subscribe((data: Car) => {
        if (data) {
          this.api.updateCar(data).subscribe(() => location.reload());
        }
      });
  }

  public delDial(id: number): void {
    this.dialog
      .open(CarsDelDialComponent, { data: id })
      .afterClosed()
      .subscribe((data: number) => {
        if (data) {
          this.api.removeCar(data).subscribe(() => location.reload());
        }
      });
  }
}
