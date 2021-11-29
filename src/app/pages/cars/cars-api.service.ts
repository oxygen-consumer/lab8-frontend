import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car-interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CarsApiService {
  constructor(private http: HttpClient) {}

  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiRoot}cars/`);
  }

  public addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${environment.apiRoot}cars/`, car);
  }

  public updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${environment.apiRoot}cars/${car.id}/`, car);
  }

  public removeCar(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiRoot}cars/${id}/`);
  }

  public genCars(num: number): Observable<number> {
    return this.http.post<number>(
      `${environment.apiRoot}cars/generateRandom/`,
      num
    );
  }
}
