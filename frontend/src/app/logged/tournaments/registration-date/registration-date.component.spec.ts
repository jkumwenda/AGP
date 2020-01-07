import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDateComponent } from './registration-date.component';

describe('RegistrationDateComponent', () => {
  let component: RegistrationDateComponent;
  let fixture: ComponentFixture<RegistrationDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
