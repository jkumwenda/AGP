import { Type } from "./type";
import { CourseTypeHole } from "./courseTypeHole";

export class CourseType {
  pk_course_typeid: number;
  hand_index: string;
  course_handicap: string;
  status: Boolean;
  fk_courseid: number;
  fk_typeid: number;
  type: Type;
  holes: CourseTypeHole[];

  constructor(handIndex, courseHandicap, type) {
    this.hand_index = handIndex;
    this.course_handicap = courseHandicap;
    this.type=type
  }
  static initializeCourseType = () => new CourseType(null, null,new Type(null));
}
