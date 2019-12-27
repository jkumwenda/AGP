import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Rating } from "../interfaces/rating";
import { CourseType } from "../interfaces/courseType";
import { CourseTypeHole } from "../interfaces/courseTypeHole";

@Injectable({
  providedIn: "root"
})
export class CourseCommunicationService {
  private rateSubject = new Subject<Rating>();
  private addCourseTypeSubject = new Subject<CourseType>();
  private selectCourseTypeSubject = new Subject<CourseType>();
  private addCourseTypeHoleSubject = new Subject<CourseTypeHole>();
  private editCourseTypeHoleSubject = new Subject<CourseTypeHole>();
  private editCourseTypeSubject = new Subject<CourseType>();

  constructor() {}

  sendEditCourseTypeEvent(courseType: CourseType) {
    this.editCourseTypeSubject.next(courseType);
  }

  getEditCourseType(): Observable<CourseType> {
    return this.editCourseTypeSubject.asObservable();
  }

  sendEditCourseTypeHoleEvent(courseTypeHole: CourseTypeHole) {
    this.editCourseTypeHoleSubject.next(courseTypeHole);
  }

  getEditCourseTypeHole(): Observable<CourseTypeHole> {
    return this.editCourseTypeHoleSubject.asObservable();
  }

  sendAddCourseTypeHoleEvent(courseTypeHole: CourseTypeHole) {
    this.addCourseTypeHoleSubject.next(courseTypeHole);
  }

  getAddCourseTypeHole(): Observable<CourseTypeHole> {
    return this.addCourseTypeHoleSubject.asObservable();
  }

  sendAddCourseTypeEvent(courseType: CourseType) {
    this.addCourseTypeSubject.next(courseType);
  }
  sendSelectCourseTypeEvent(courseType: CourseType) {
    this.selectCourseTypeSubject.next(courseType);
  }

  getSelectCourseType(): Observable<CourseType> {
    return this.selectCourseTypeSubject.asObservable();
  }

  getCourseType(): Observable<CourseType> {
    return this.addCourseTypeSubject.asObservable();
  }

  sendRating(rating: Rating) {
    this.rateSubject.next(rating);
  }

  getRating(): Observable<Rating> {
    return this.rateSubject.asObservable();
  }
}
