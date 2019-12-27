import { Course } from './course'

export class Rating{
  pk_ratingid:number
  course_rating:string
  sloppy_rating:string
  par:string
  fk_courseid:number
  course:Course

  constructor(ratingId, courseRating, sloppyRating,par,courseId){
    this.pk_ratingid=ratingId
    this.course_rating=courseRating
    this.sloppy_rating= sloppyRating
    this.par=par
    this.fk_courseid= courseId
  }
  static initializeRating(){
    return new Rating(null,null,null,null,null)
  }
}
