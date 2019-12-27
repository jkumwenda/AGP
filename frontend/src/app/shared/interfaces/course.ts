import { Country } from "./country";
import { Rating } from './rating';

export class Course {
  pk_courseid: number;
  pk_countryid: number;
  course: string;
  country: Country;
  rating: Rating[]

  constructor(course:string,country:Country){
    this.course=course
    this.country=country
    this.rating=[]
  }
}
