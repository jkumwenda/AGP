import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseTypeHoleService } from 'src/app/shared/services/course-type-hole.service';
import { Hole } from 'src/app/shared/interfaces/hole';
import { CourseTypeHole } from 'src/app/shared/interfaces/courseTypeHole';
import { HoleService } from 'src/app/shared/services/hole.service';
import { Subscription } from 'rxjs';
import { CourseCommunicationService } from 'src/app/shared/services/course-communication.service';
import { CourseType } from 'src/app/shared/interfaces/courseType';

@Component({
  selector: 'app-add-course-type-hole',
  templateUrl: './add-course-type-hole.component.html',
  styleUrls: ['./add-course-type-hole.component.css']
})
export class AddCourseTypeHoleComponent implements OnInit {

  @ViewChild("closeModal", null) closeModal: ElementRef
  @Input() courseTypeId:number

  public moduleTitle:string="Add Hole"
  public courseTypeHoleForm: FormGroup
  public holes:Hole[]=[]
  private selectCourseTypeSubscription: Subscription


  constructor(
    private courseTypeHoleService: CourseTypeHoleService,
    private formBuilder: FormBuilder,
    private holeService: HoleService,
    private courseCommunicationService: CourseCommunicationService
  ) {
    this.subscribe()
  }

  subscribe() {
    this.selectCourseTypeSubscription = this.courseCommunicationService
      .getSelectCourseType()
      .subscribe((courseType: CourseType) => {
        this.courseTypeId=courseType.pk_course_typeid
      });
  }

  addCourseTypeHole(){
    this.courseTypeHoleForm.value.fk_course_typeid=this.courseTypeId
    this.courseTypeHoleService.addCourseTypeHole(this.courseTypeHoleForm.value).then(
      (result: CourseTypeHole) => {
        this.closeModal.nativeElement.click()
        this.courseCommunicationService.sendAddCourseTypeHoleEvent(result)
        this.initialiseCourseTypeHoleForm()

      }
    )
  }

  private initialiseCourseTypeHoleForm(){
    this.courseTypeHoleForm= this.formBuilder.group({
      distance: ['', Validators.compose([Validators.required])],
      par: ['', Validators.compose([Validators.required])],
      si: ['', Validators.compose([Validators.required])],
      hole_pk_holeid: ['', Validators.compose([Validators.required])],
      fk_course_typeid:this.courseTypeId
    })
  }

  getHoles(){
    this.holeService.getHoles().then(
      (result:Hole[])=> this.holes= result,
      error=>console.log(error)
    )
  }

  ngOnInit() {
    this.initialiseCourseTypeHoleForm()
    this.getHoles()

  }

}
