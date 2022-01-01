import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAddDialComponent } from './clients-add-dial.component';

describe('ClientsAddDialComponent', () => {
  let component: ClientsAddDialComponent;
  let fixture: ComponentFixture<ClientsAddDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsAddDialComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsAddDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
