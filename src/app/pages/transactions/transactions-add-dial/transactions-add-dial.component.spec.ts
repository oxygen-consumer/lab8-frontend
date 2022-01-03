import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsAddDialComponent } from './transactions-add-dial.component';

describe('TransactionsAddDialComponent', () => {
  let component: TransactionsAddDialComponent;
  let fixture: ComponentFixture<TransactionsAddDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsAddDialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsAddDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
