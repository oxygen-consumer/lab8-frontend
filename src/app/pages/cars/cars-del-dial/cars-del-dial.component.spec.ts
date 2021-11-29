import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDelDialComponent } from './cars-del-dial.component';

describe('CarsDelDialComponent', () => {
  let component: CarsDelDialComponent;
  let fixture: ComponentFixture<CarsDelDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsDelDialComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsDelDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
