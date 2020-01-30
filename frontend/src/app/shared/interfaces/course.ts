import { Country } from "./country";
import { Rating } from './rating';
import { CourseType } from './courseType';

export class Course {
  pk_courseid: number;
  pk_countryid: number;
  course: string;
  country: Country;
  rating: Rating[]
  courseTypes: CourseType[]

  constructor(course:string,country:Country){
    this.course=course
    this.country=country
    this.rating=[Rating.initializeRating()]
  }

  static initializeCourse = () => new Course("", new Country(null,"", ""))

}
