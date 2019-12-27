import { TestBed } from '@angular/core/testing';

import { CourseTypeHoleService } from './course-type-hole.service';

describe('CourseTypeHoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseTypeHoleService = TestBed.get(CourseTypeHoleService);
    expect(service).toBeTruthy();
  });
});
