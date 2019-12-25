import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseTypeHoleComponent } from './add-course-type-hole.component';

describe('AddCourseTypeHoleComponent', () => {
  let component: AddCourseTypeHoleComponent;
  let fixture: ComponentFixture<AddCourseTypeHoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseTypeHoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseTypeHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
