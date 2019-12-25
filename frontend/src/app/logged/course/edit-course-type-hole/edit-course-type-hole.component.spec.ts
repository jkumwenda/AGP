import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseTypeHoleComponent } from './edit-course-type-hole.component';

describe('EditCourseTypeHoleComponent', () => {
  let component: EditCourseTypeHoleComponent;
  let fixture: ComponentFixture<EditCourseTypeHoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCourseTypeHoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseTypeHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
