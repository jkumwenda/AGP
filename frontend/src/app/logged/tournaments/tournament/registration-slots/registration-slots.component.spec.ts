import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSlotsComponent } from './registration-slots.component';

describe('RegistrationSlotsComponent', () => {
  let component: RegistrationSlotsComponent;
  let fixture: ComponentFixture<RegistrationSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
