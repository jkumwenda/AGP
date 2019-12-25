import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTypeHolesComponent } from './course-type-holes.component';

describe('CourseTypeHolesComponent', () => {
  let component: CourseTypeHolesComponent;
  let fixture: ComponentFixture<CourseTypeHolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTypeHolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTypeHolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
