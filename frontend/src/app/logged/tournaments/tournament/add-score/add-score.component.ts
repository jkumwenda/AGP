import { Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CourseTypeHole} from '../../../../shared/interfaces/courseTypeHole';
import {ScoreService} from '../../../../shared/services/score.service';
import {Score} from '../../../../shared/interfaces/score';
import {Profile} from '../../../../shared/interfaces/profile';
import {ActivatedRoute} from '@angular/router';
import { EventCourseTypeService } from 'src/app/shared/services/event-course-type.service';
import {EventCourseType} from '../../../../shared/interfaces/eventCourseType';

@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.component.html',
  styleUrls: ['./add-score.component.css']
})
export class AddScoreComponent implements OnInit {
  @Input() eventId: number;
  @Input() profile: Profile;
  public scoreForm: FormGroup;
  public moduleTitle = 'Add Score';
  public courseTypeHoles: CourseTypeHole[] = [];
  public scores: Score[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private scoreService: ScoreService,
    private courseTypeHoleService: EventCourseTypeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.eventId = this.activatedRoute.snapshot.params.id;
  }
  getCourseTypeHoles(genderId, eventId) {
    this.courseTypeHoleService.getGenderEventCourseTypes(genderId, eventId).then(
      (result: EventCourseType[]) => {
        if (result.length > 0) {
          this.courseTypeHoles = this.filterCourseTypeHole(result[0].courseType.holes);
          return;
        }
      },
      error => {}
    );
  }

  filterCourseTypeHole(courseTypeHoles: CourseTypeHole[]) {
    if (courseTypeHoles.length === 0) {
      return [] ;
    }
    return courseTypeHoles.filter(
      courseTypeHole => !this.scores.some(score => score.fk_coursetype_holeid === courseTypeHole.pk_course_type_holeid)
    );
  }

  getScores(profileId, eventId) {
    this.scoreService.getScores(profileId, eventId).then(
      (result: Score[]) => {
        this.scores = result;

        if (this.courseTypeHoles.length !== 0) {
          this.courseTypeHoles = this.filterCourseTypeHole(this.courseTypeHoles);
        }
      },
      error => {}
    );
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes) {
   this.initScoreForm();
   this.getScores(this.profile.pk_profileid, this.eventId);
   this.getCourseTypeHoles(this.profile.fk_genderid.pk_genderid, this.eventId);
  }

  initScoreForm() {
    this.scoreForm =  this.formBuilder.group({
      hits: ['', Validators.compose([Validators.required,  Validators.pattern('^[0-9]*$')])],
      fk_eventid: this.eventId,
      fk_profileid: this.profile.pk_profileid,
      fk_coursetype_holeid: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    });
  }
  ngOnInit() {
    this.getScores(this.profile.pk_profileid, this.eventId);
    this.getCourseTypeHoles(this.profile.fk_genderid.pk_genderid, this.eventId);
    this.initScoreForm();
  }

  addScore() {
    this.scoreService.addScore(this.scoreForm.value).then(
      (result: Score) => {
        this.scores.push(result);
        this.courseTypeHoles = this.filterCourseTypeHole(this.courseTypeHoles);
        this.initScoreForm();
      },
      error => {}
    );
  }
}
