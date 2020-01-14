import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CourseService } from "src/app/shared/services/course.service";
import { CourseType } from "src/app/shared/interfaces/courseType";
import { Subscription } from "rxjs";
import { CourseCommunicationService } from "src/app/shared/services/course-communication.service";
import { CourseTypeHole } from "src/app/shared/interfaces/courseTypeHole";

@Component({
  selector: "app-course-types",
  templateUrl: "./course-types.component.html",
  styleUrls: ["./course-types.component.css"]
})
export class CourseTypesComponent implements OnInit {
  @Input() courseId: number;
  @Output() courseTypeSelected = new EventEmitter<CourseType>();
  @Input() courseTypes: CourseType[];
  private subscription: Subscription;
  private editCourseTypeHoleSubscription: Subscription;
  private editCourseTypeSubscription: Subscription;

  public addComponentCreated: Boolean = false;

  constructor(
    private courseService: CourseService,
    private courseCommunicationService: CourseCommunicationService
  ) {
    this.subscribe();
  }
  subscribe() {
    this.subscription = this.courseCommunicationService
      .getCourseType()
      .subscribe((courseType: CourseType) => {
        this.courseTypes.push(courseType);
      });

    this.editCourseTypeHoleSubscription = this.courseCommunicationService
      .getEditCourseTypeHole()
      .subscribe((courseTypeHole: CourseTypeHole) => {
        let courseTypeIndex = this.courseTypes.findIndex(
          coursetype =>
            coursetype.pk_course_typeid == courseTypeHole.fk_course_typeid
        );
        let courseHoleTypeIndex = this.courseTypes[courseTypeIndex].holes.findIndex(
            hole => hole.pk_course_type_holeid== courseTypeHole.pk_course_type_holeid
        )
        this.courseTypes[courseTypeIndex].holes[courseHoleTypeIndex]=courseTypeHole
      });

      this.editCourseTypeSubscription = this.courseCommunicationService
      .getEditCourseType()
      .subscribe((courseType:CourseType)=>{
        let courseTypeIndex = this.courseTypes.findIndex( cType => courseType.pk_course_typeid==cType.pk_course_typeid);
        this.courseTypes[courseTypeIndex]= courseType
      })

  }
  getCourseType(courseId) {
    this.courseService.getCourseTypes(courseId).then(
      (result: CourseType[]) => (this.courseTypes = result),
      error => console.log(error)
    );
  }

  selectCourseType(courseType: CourseType) {
    this.courseCommunicationService.sendSelectCourseTypeEvent(courseType);
  }

  checkIfEmpty() {
    return Array.isArray(this.courseTypes) && this.courseTypes.length;
  }

  ngOnInit() {
    this.getCourseType(this.courseId);
  }
}
