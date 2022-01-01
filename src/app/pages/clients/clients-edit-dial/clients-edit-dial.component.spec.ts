import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsEditDialComponent } from './clients-edit-dial.component';

describe('ClientsEditDialComponent', () => {
  let component: ClientsEditDialComponent;
  let fixture: ComponentFixture<ClientsEditDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsEditDialComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsEditDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
