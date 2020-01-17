import { Component, OnInit, Input } from "@angular/core";
import { CourseTypeHole } from "src/app/shared/interfaces/courseTypeHole";
import { ActivatedRoute } from "@angular/router";
import { CourseType } from "src/app/shared/interfaces/courseType";
import { CourseCommunicationService } from "src/app/shared/services/course-communication.service";
import { Subscription } from "rxjs";
import { CourseTypeHoleService } from "src/app/shared/services/course-type-hole.service";

@Component({
  selector: "app-course-type-holes",
  templateUrl: "./course-type-holes.component.html",
  styleUrls: ["./course-type-holes.component.css"]
})
export class CourseTypeHolesComponent implements OnInit {
  @Input() public courseType: CourseType;
  @Input() courseTypeId: number;
  private selectCourseTypeSubscription: Subscription;
  private AddCourseTypeHoleSubscription: Subscription;
  public courseTypehole: CourseTypeHole;
  public editCourseTypeCreated: Boolean = false;

  constructor(
    private courseCommunicationService: CourseCommunicationService,
    private courseTypeHoleService: CourseTypeHoleService
  ) {
    this.subscribe();
  }

  editHole(courseTypeHole) {
    this.courseTypehole = courseTypeHole;
    this.editCourseTypeCreated = true;
  }

  editedHole(courseTypeHole: CourseTypeHole) {
    console.log(courseTypeHole)
    let index = this.courseType.holes.findIndex(
      hole => hole.pk_course_type_holeid == courseTypeHole.pk_course_type_holeid
    );
    this.courseType.holes[index] = courseTypeHole;
  }

  deleteHole(holeId) {
    this.courseTypeHoleService.deleteCourseTypeHole(holeId).then(
      result => {
        this.courseType.holes = this.courseType.holes.filter(
          hole => hole.pk_course_type_holeid != holeId
        );
      },
      error => console.log(error)
    );
  }

  subscribe() {
    this.selectCourseTypeSubscription = this.courseCommunicationService
      .getSelectCourseType()
      .subscribe((courseType: CourseType) => {
        this.courseType = courseType;
      });
    this.AddCourseTypeHoleSubscription = this.courseCommunicationService
      .getAddCourseTypeHole()
      .subscribe((courseTypeHole: CourseTypeHole) => {
        this.courseType.holes.push(courseTypeHole);
      });
  }

  ngOnInit() {}

  checkIfEmpty() {
    return Array.isArray(this.courseType.holes) && this.courseType.holes.length;
  }
}
