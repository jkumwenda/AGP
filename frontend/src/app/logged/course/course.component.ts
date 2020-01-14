import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/shared/services/course.service";
import { Course } from "src/app/shared/interfaces/course";
import { ActivatedRoute } from "@angular/router";
import { CourseCommunicationService } from "src/app/shared/services/course-communication.service";
import { Rating } from "src/app/shared/interfaces/rating";
import { CourseType } from "src/app/shared/interfaces/courseType";
import { CourseTypeHole } from "src/app/shared/interfaces/courseTypeHole";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  private subscription: Subscription;
  public course: Course;
  public editComponentCreated: boolean = false;
  public addComponentCreated: boolean = false;
  public courseId: number;
  public courseType: CourseType;
  public courseTypes: CourseType[]=[];
  public holes: CourseTypeHole[];

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private courseCommunicationService: CourseCommunicationService
  ) {
    this.course = Course.initializeCourse();
    this.courseId = activatedRoute.snapshot.params["id"];
    this.subscribe()
  }

  subscribe() {
    this.subscription = this.courseCommunicationService
      .getCourseType()
      .subscribe((courseType: CourseType) => {
        this.courseTypes.push(courseType);
        this.courseType=courseType

      });
  }

  sendRating(rating: Rating): void {
    if (this.checkRating()) {
      rating = Rating.initializeRating();
      rating.fk_courseid = this.courseId;
    }
    this.courseCommunicationService.sendRating(rating);
  }

  getCourse(courseId) {
    this.courseService.getCourse(courseId).then(
      (result: Course) => {
        this.course = result;
        this.sendRating(this.course.rating[0]);
      },
      error => console.log(error)
    );
  }

  getCourseTypes(courseId) {
    this.courseService.getCourseTypes(courseId).then(
      (result: CourseType[]) => {
        this.courseTypes = result
        this.courseType = !this.isEmpty(this.courseTypes) ? this.courseTypes[0] :  CourseType.initializeCourseType();
      },
      error => console.log(error)
    );
  }

  checkRating() {
    if (this.course.rating[0] === undefined) return true;

    return false;
  }

  isEmpty(array){
   return array.length == 0
  }


  ngOnInit() {
    this.getCourse(this.courseId);
    this.getCourseTypes(this.courseId)

  }
}
