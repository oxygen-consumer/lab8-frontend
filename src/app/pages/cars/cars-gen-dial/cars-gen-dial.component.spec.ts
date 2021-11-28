import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsGenDialComponent } from './cars-gen-dial.component';

describe('CarsGenDialComponent', () => {
  let component: CarsGenDialComponent;
  let fixture: ComponentFixture<CarsGenDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsGenDialComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsGenDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
