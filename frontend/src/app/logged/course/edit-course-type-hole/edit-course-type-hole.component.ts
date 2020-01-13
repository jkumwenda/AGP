import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseTypeHoleService } from 'src/app/shared/services/course-type-hole.service';
import { Hole } from 'src/app/shared/interfaces/hole';
import { CourseTypeHole } from 'src/app/shared/interfaces/courseTypeHole';
import { HoleService } from 'src/app/shared/services/hole.service';
import { CourseCommunicationService } from 'src/app/shared/services/course-communication.service';

@Component({
  selector: 'app-edit-course-type-hole',
  templateUrl: './edit-course-type-hole.component.html',
  styleUrls: ['./edit-course-type-hole.component.css']
})
export class EditCourseTypeHoleComponent implements OnInit {

  @ViewChild("closeModal", null) closeModal: ElementRef;
  @Output() editCourseTypeHoleEvent= new EventEmitter<CourseTypeHole>()

  @Input() courseTypeHole:CourseTypeHole
  public moduleTitle:string='Edit Hole'
  public courseTypeHoleForm:FormGroup
  public holes:Hole[]

  editCourseTypeHole(){
    let holeId=this.courseTypeHole.pk_course_type_holeid
    let courseTypeHoleData= this.courseTypeHoleForm.value

    this.courseTypeHoleService.editCourseTypeHole(holeId, courseTypeHoleData ).then(
      (result)=> {
        courseTypeHoleData.pk_course_type_holeid=holeId
        this.courseCommunicationService.sendEditCourseTypeHoleEvent(courseTypeHoleData)
        this.closeModal.nativeElement.click()
      },
      error=>console.log(error)
    )
  }

  constructor(
    private formBuilder: FormBuilder,
    private courseTypeHoleService: CourseTypeHoleService,
    private courseCommunicationService: CourseCommunicationService,
    private holeService:HoleService
  ) {

   }

   ngOnChanges(): void {
    this.initialiseCourseTypeHoleForm(this.courseTypeHole)
   }

  private getHoles(){
    this.holeService.getHoles().then(
      (result:Hole[]) => this.holes= result,
      error => console.log(error)
    )
  }
  private initialiseCourseTypeHoleForm(courseTypeHole:CourseTypeHole){
    this.courseTypeHoleForm= this.formBuilder.group({
      distance: [courseTypeHole.distance, Validators.compose([Validators.required])],
      par: [courseTypeHole.par, Validators.compose([Validators.required])],
      si: [courseTypeHole.si, Validators.compose([Validators.required])],
      hole_pk_holeid: [courseTypeHole.hole_pk_holeid, Validators.compose([Validators.required])],
      fk_course_typeid:courseTypeHole.fk_course_typeid
    })
  }

  ngOnInit() {
    this.initialiseCourseTypeHoleForm(this.courseTypeHole)
    this.getHoles()
  }

}
