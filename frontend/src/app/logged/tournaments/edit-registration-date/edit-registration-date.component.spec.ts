import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegistrationDateComponent } from './edit-registration-date.component';

describe('EditRegistrationDateComponent', () => {
  let component: EditRegistrationDateComponent;
  let fixture: ComponentFixture<EditRegistrationDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRegistrationDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRegistrationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
