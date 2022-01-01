import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDelDialComponent } from './clients-del-dial.component';

describe('ClientsDelDialComponent', () => {
  let component: ClientsDelDialComponent;
  let fixture: ComponentFixture<ClientsDelDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsDelDialComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsDelDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
