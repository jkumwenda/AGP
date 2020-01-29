import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCourseTypeDetailComponent } from './event-course-type-detail.component';

describe('EventCourseTypeDetailComponent', () => {
  let component: EventCourseTypeDetailComponent;
  let fixture: ComponentFixture<EventCourseTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCourseTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCourseTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
