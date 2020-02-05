
import {CourseTypeHole} from './courseTypeHole';

export class Score {
  pk_scoreid: number;
  hits: number;
  fk_coursetype_holeid: number;
  fk_profileid: number;
  courseTypeHole: CourseTypeHole;
  edit: boolean;
}
