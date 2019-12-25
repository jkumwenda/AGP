import { TestBed } from '@angular/core/testing';

import { CourseTypeService } from './course-type.service';

describe('CourseTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseTypeService = TestBed.get(CourseTypeService);
    expect(service).toBeTruthy();
  });
});
