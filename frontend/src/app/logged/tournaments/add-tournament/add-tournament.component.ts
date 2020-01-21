import { Component, OnInit } from "@angular/core";
import { DrawType } from "src/app/shared/interfaces/draw-type";
import { DrawTypeService } from "src/app/shared/services/draw-type.service";
import { EventType } from "src/app/shared/interfaces/event-type";
import { EventTypeService } from "src/app/shared/services/event-type.service";
import { Profile } from "src/app/shared/interfaces/profile";
import { ProfileService } from "src/app/shared/services/profile.service";
import { Course } from "src/app/shared/interfaces/course";
import { CourseService } from "src/app/shared/services/course.service";
import { TournamentService } from "src/app/shared/services/tournament.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DatePipe } from '@angular/common';
import { Tournament } from 'src/app/shared/interfaces/tournament';
@Component({
  selector: "app-add-tournament",
  templateUrl: "./add-tournament.component.html",
  styleUrls: ["./add-tournament.component.css"]
})
export class AddTournamentComponent implements OnInit {
  public moduleTitle: string = "Add Tournament";
  public tournamentForm: FormGroup;
  public tournamentData: any;
  public eventTypes: EventType[];
  public drawTypes: DrawType[];
  public profiles: Profile[];
  public courses: Course[];
  public profileId: Profile;

  constructor(
    public datepipe: DatePipe,
    private eventTypeService: EventTypeService,
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private tournamentService: TournamentService,
    private drawTypeService: DrawTypeService,
    private courseService: CourseService,
    private router: Router
  ) {}

  addTournament() {
    const data = this.tournamentForm.value;
    this.tournamentData = {
      event: data.event,
      event_description: data.event_description,
      holes: data.holes,
      start_date: data.start_date,
      end_date: data.end_date,
      fk_draw_typeid: data.fk_draw_typeid,
      fk_event_typeid: data.fk_event_typeid,
      fk_courseid: data.fk_courseid,
      fk_profileid: 1,
    };

    this.tournamentService.addTournament(this.tournamentData).then((result:Tournament) => {
      console.log(result)
      this.router.navigate(['/tournaments/tournament', result.pk_eventid]);
    }, (error) => {

    });
  }

  getDrawTypes() {
    this.drawTypeService.getDrawTypes().then(
      (result: DrawType[]) => {
        this.drawTypes = result;

      },
      (error) => {

      }
    );
  }

  getEventTypes() {
    this.eventTypeService.getEventTypes().then(
      (result: EventType[]) => {
        this.eventTypes = result;

      },
      (error) => {

      }
    );
  }

  getCourses() {
    this.courseService.getCourses().then(
      (result: Course[]) => {
        this.courses = result;

      },
      (error) => {

      }
    );
  }

  ngOnInit() {

    this.getEventTypes();
    this.getDrawTypes();
    this.getCourses();
    this.tournamentForm = this.formBuilder.group({
      event: ["", Validators.compose([Validators.required])],
      event_description: ["", Validators.compose([Validators.required])],
      holes: ["", Validators.compose([Validators.required])],
      start_date: ["", Validators.compose([Validators.required])],
      end_date: ["", Validators.compose([Validators.required])],
      fk_draw_typeid: ["", Validators.compose([Validators.required])],
      fk_event_typeid: ["", Validators.compose([Validators.required])],
      fk_courseid: ["", Validators.compose([Validators.required])],
    });
  }
}
