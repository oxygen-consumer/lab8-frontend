import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsEditDialComponent } from './cars-edit-dial.component';

describe('CarsEditDialComponent', () => {
  let component: CarsEditDialComponent;
  let fixture: ComponentFixture<CarsEditDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsEditDialComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsEditDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
