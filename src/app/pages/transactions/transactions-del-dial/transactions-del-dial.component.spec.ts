import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsDelDialComponent } from './transactions-del-dial.component';

describe('TransactionsDelDialComponent', () => {
  let component: TransactionsDelDialComponent;
  let fixture: ComponentFixture<TransactionsDelDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsDelDialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsDelDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
