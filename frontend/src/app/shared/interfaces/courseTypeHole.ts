import { Hole } from './hole';

export class CourseTypeHole {
  pk_course_type_holeid: number;
  distance: number;
  par: number;
  si: number;
  fk_course_typeid: number;
  hole_pk_holeid: number;
  hole: Hole;
}
