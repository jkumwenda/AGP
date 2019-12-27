import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTypesComponent } from './course-types.component';

describe('CourseTypesComponent', () => {
  let component: CourseTypesComponent;
  let fixture: ComponentFixture<CourseTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
