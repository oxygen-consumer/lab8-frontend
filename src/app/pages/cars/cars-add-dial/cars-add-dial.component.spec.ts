import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsAddDialComponent } from './cars-add-dial.component';

describe('CarsAddDialComponent', () => {
  let component: CarsAddDialComponent;
  let fixture: ComponentFixture<CarsAddDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsAddDialComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsAddDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
