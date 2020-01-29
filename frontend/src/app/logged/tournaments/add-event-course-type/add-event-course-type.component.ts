import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventCourseTypeService } from 'src/app/shared/services/event-course-type.service';
import { TournamentService } from 'src/app/shared/services/tournament.service';
import { CourseTypeService } from 'src/app/shared/services/course-type.service';
import { GenderService } from 'src/app/shared/services/gender.service';
import { EventCourseType } from 'src/app/shared/interfaces/eventCourseType';
import { Tournament } from 'src/app/shared/interfaces/tournament';
import { Gender } from 'src/app/shared/interfaces/gender';
import { CourseType } from 'src/app/shared/interfaces/courseType';
import { Router } from '@angular/router';
import { EventCourseTypeCommunicationService } from '../../../shared/services/event-course-type-communication.service';

@Component({
  selector: 'app-add-event-course-type',
  templateUrl: './add-event-course-type.component.html',
  styleUrls: ['./add-event-course-type.component.css']
})
export class AddEventCourseTypeComponent implements OnInit {
  @ViewChild('closeModal', null) closeModal: ElementRef;

  public moduleTitle = 'Set Event Course Type';
  public eventCourseTypeForm: FormGroup;
  public eventCourseTypeData: any;
  public courseTypes: CourseType[];
  public tournaments: Tournament[];
  public genders: Gender[];

  @Output() eventCourseTypeCreated = new EventEmitter<any>();
  @Input() eventId: number;

  constructor(
    private formBuilder: FormBuilder,
    private eventCourseTypeService: EventCourseTypeService,
    private genderService: GenderService,
    private tournamentService: TournamentService,
    private courseTypeService: CourseTypeService,
    private communicationService: EventCourseTypeCommunicationService,
    private router: Router
  ) {

  }

  addEventCourseType() {
    const data = this.eventCourseTypeForm.value;
    this.eventCourseTypeService.addEventCourseType(this.eventCourseTypeForm.value).then(
       (result: EventCourseType) => {
        this.communicationService.sendAddEventCourseTypeEvent(result);
        this.closeModal.nativeElement.click();
       },
       error => console.log(error)
     );
  }

  getGenders() {
    this.genderService.getGenders().then(
      (result: Gender[]) => {
        this.genders = result;
      },
      error => console.log(error)
    );
  }

  getCourseTypes() {
    this.courseTypeService.getCourseTypes().then(
      (result: CourseType[]) => {
        this.courseTypes = result;
      },
      error => console.log(error)
    );
  }

  getTournaments() {
    this.tournamentService.getTournaments().then(
      (result: Tournament[]) => {
        this.tournaments = result;
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.getGenders();
    this.getCourseTypes();
    this.getTournaments();
    this.eventCourseTypeForm = this.formBuilder.group({
      fk_genderid: ['', Validators.compose([Validators.required])],
      fk_course_typeid: ['', Validators.compose([Validators.required])],
      fk_eventid: this.eventId,
    });
  }
}
