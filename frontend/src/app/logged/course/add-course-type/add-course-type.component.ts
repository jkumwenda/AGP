import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CourseTypeService } from "src/app/shared/services/course-type.service";
import { Type } from 'src/app/shared/interfaces/type';
import { TypeService } from 'src/app/shared/services/type.service';
import { CourseType } from 'src/app/shared/interfaces/courseType';
import { CourseCommunicationService } from 'src/app/shared/services/course-communication.service';


@Component({
  selector: "app-add-course-type",
  templateUrl: "./add-course-type.component.html",
  styleUrls: ["./add-course-type.component.css"]
})
export class AddCourseTypeComponent implements OnInit {

  @ViewChild("closeModal", null) closeModal: ElementRef;
  @Input() courseId: number;
  @Output() courseTypeAdded= new EventEmitter<CourseType>();

  public courseTypeForm: FormGroup;
  public types:Type[]
  public moduleTitle:string="Add Course Type"

  constructor(
    private courseTypeService: CourseTypeService,
    private courseCommunicationService: CourseCommunicationService,
    private formbuilder: FormBuilder,
    private typeService: TypeService
  ) {}


  addCourseType(){
    this.courseTypeService.addCourseType(this.courseTypeForm.value).then(
      (result:CourseType)=>{
        this.courseCommunicationService.sendAddCourseTypeEvent(result)
        this.closeModal.nativeElement.click();
      },
       error => console.log(error)
    )
  }

  private initializeCourseTypeForm() {
    this.courseTypeForm = this.formbuilder.group({
      hand_index: ["", Validators.compose([Validators.required])],
      course_handicap: ["", Validators.compose([Validators.required])],
      status: [1, Validators.compose([Validators.required])],
      fk_typeid: ["", Validators.compose([Validators.required])],
      fk_courseid: this.courseId
    });
  }
  ngOnInit() {
    this.initializeCourseTypeForm()
    this.typeService.getTypes().then(
      (result:Type[])=> this.types= result,
      error=> console.log(error)
    )
  }
}
