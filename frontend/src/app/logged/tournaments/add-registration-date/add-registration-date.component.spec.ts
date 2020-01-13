import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegistrationDateComponent } from './add-registration-date.component';

describe('AddRegistrationDateComponent', () => {
  let component: AddRegistrationDateComponent;
  let fixture: ComponentFixture<AddRegistrationDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRegistrationDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRegistrationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
