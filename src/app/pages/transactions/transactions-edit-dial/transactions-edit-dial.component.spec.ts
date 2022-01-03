import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsEditDialComponent } from './transactions-edit-dial.component';

describe('TransactionsEditDialComponent', () => {
  let component: TransactionsEditDialComponent;
  let fixture: ComponentFixture<TransactionsEditDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsEditDialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsEditDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
