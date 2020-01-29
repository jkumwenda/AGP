import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventCourseTypeComponent } from './add-event-course-type.component';

describe('AddEventCourseTypeComponent', () => {
  let component: AddEventCourseTypeComponent;
  let fixture: ComponentFixture<AddEventCourseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventCourseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventCourseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
