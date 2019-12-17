import { Country } from "./country";

export class Course {
  pk_courseid: number;
  pk_countryid: number;
  course: string;
  country: Country;

  constructor(course:string,country:Country){
    this.course=course
    this.country=country
  }
}
