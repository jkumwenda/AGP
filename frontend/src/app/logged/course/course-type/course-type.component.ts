import { Component, OnInit, Input } from '@angular/core';
import { CourseType } from 'src/app/shared/interfaces/courseType';
import { Subscription } from 'rxjs';
import { CourseCommunicationService } from 'src/app/shared/services/course-communication.service';

@Component({
  selector: 'app-course-type',
  templateUrl: './course-type.component.html',
  styleUrls: ['./course-type.component.css']
})
export class CourseTypeComponent implements OnInit {

  @Input() courseType:CourseType
  private selectCourseTypeSubscription: Subscription;
  private editCourseTypeSuscription: Subscription;
  public editCourseType:Boolean=false


  constructor(
    private courseCommunicationService: CourseCommunicationService
  ) {
    this.subscribe()
   }

  subscribe() {
    this.selectCourseTypeSubscription = this.courseCommunicationService
      .getSelectCourseType()
      .subscribe((courseType: CourseType) => {
        this.courseType=courseType
      });

      this.editCourseTypeSuscription = this.courseCommunicationService
      .getEditCourseType()
      .subscribe((courseType: CourseType) => {
        this.courseType=courseType
      });
  }

  ngOnInit() {
  }

}
