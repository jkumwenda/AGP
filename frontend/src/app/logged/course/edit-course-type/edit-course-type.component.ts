import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CourseType } from "src/app/shared/interfaces/courseType";
import { CourseTypeService } from "src/app/shared/services/course-type.service";
import { Subscription } from "rxjs";
import { CourseCommunicationService } from "src/app/shared/services/course-communication.service";

@Component({
  selector: "app-edit-course-type",
  templateUrl: "./edit-course-type.component.html",
  styleUrls: ["./edit-course-type.component.css"]
})
export class EditCourseTypeComponent implements OnInit {
  @Input() courseType: CourseType;
  @ViewChild("closeModal", null) closeModal: ElementRef;

  public moduleTitle: string = "Edit Course Type";
  public courseTypeForm: FormGroup;
  private selectCourseTypeSubscription: Subscription;

  constructor(
    private courseTypeService: CourseTypeService,
    private formBuilder: FormBuilder,
    private courseCommunicationService: CourseCommunicationService
  ) {
    this.initialiseCourseTypeForm(CourseType.initializeCourseType());
    this.subscribe();
  }

  subscribe() {
    this.selectCourseTypeSubscription = this.courseCommunicationService
      .getSelectCourseType()
      .subscribe((courseType: CourseType) => {
        this.courseType = courseType;
        this.initialiseCourseTypeForm(this.courseType);
      });
  }

  editCourseType() {
    let courseTypeId = this.courseType.pk_course_typeid;
    let courseTypeData: CourseType = this.courseTypeForm.value;

    this.courseTypeService.editCourseType(courseTypeId, courseTypeData).then(
      result => {
        courseTypeData.type = this.courseType.type;
        courseTypeData.pk_course_typeid = courseTypeId;
        courseTypeData.holes = this.courseType.holes;
        this.courseCommunicationService.sendEditCourseTypeEvent(courseTypeData);
        this.closeModal.nativeElement.click();
      },
      error => console.log(error)
    );
  }

  initialiseCourseTypeForm(courseType: CourseType) {
    this.courseTypeForm = this.formBuilder.group({
      hand_index: [
        courseType.hand_index,
        Validators.compose([Validators.required])
      ],
      course_handicap: [
        courseType.course_handicap,
        Validators.compose([Validators.required])
      ],
      fk_courseid: courseType.fk_courseid,
      fk_typeid: courseType.fk_typeid,
      status: courseType.status
    });
  }

  ngOnInit() {
    this.initialiseCourseTypeForm(this.courseType);
  }
}
