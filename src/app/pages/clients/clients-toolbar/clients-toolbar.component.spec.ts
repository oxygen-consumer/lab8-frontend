import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsToolbarComponent } from './clients-toolbar.component';

describe('ClientsToolbarComponent', () => {
  let component: ClientsToolbarComponent;
  let fixture: ComponentFixture<ClientsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsToolbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
