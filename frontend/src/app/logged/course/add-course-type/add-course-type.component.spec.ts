import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseTypeComponent } from './add-course-type.component';

describe('AddCourseTypeComponent', () => {
  let component: AddCourseTypeComponent;
  let fixture: ComponentFixture<AddCourseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
