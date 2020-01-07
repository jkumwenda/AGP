import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { Tournament } from "src/app/shared/interfaces/tournament";
import { EventType } from "src/app/shared/interfaces/event-type";
import { EventTypeService } from "src/app/shared/services/event-type.service";
import { Profile } from "src/app/shared/interfaces/profile";
import { ProfileService } from "src/app/shared/services/profile.service";
import { DrawType } from "src/app/shared/interfaces/draw-type";
import { DrawTypeService } from "src/app/shared/services/draw-type.service";
import { TournamentService } from "src/app/shared/services/tournament.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DatePipe } from '@angular/common'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-tournament-format',
  templateUrl: './edit-tournament.component.html',
  styleUrls: ['./edit-tournament.component.css']
})
export class EditTournamentComponent implements OnInit {
  @Input() tournamentId: number;
  @ViewChild("closeModal", null) closeModal: ElementRef;

  public moduleTitle: string = "Edit Tournament";
  public tournamentForm: FormGroup;
  private tournamentData: any;
  public tournament: Tournament;
  public eventType: EventType;
  public drawType: DrawType;
  public profile: Profile;
  public eventTypes: EventType[];
  public drawTypes: DrawType[];
  public profiles: Profile[];


  constructor(
    private formBuilder: FormBuilder,
    private tournamentService: TournamentService,
    private drawTypeService: DrawTypeService,
    private eventTypeService: EventTypeService,
    private profileService: ProfileService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
     this.tournamentId = activatedRoute.snapshot.params['id'];
     this.initializeTournamentForm();
   }

   getTournament(tournamentId){
     
     this.tournamentService.getTournament(tournamentId).then((result) => {
       this.tournament = result as Tournament;
       
       this.initializeTournamentForm();
       console.log(this.initializeTournamentForm());

     }, (error) => {
     });
     }

   editTournament(tournamentId){
     const data = this.tournamentForm.value;
     this.tournamentData = {
      fk_event_typeid: data.fk_event_typeid,
      fk_profileid: data.fk_profileid,
      fk_draw_typeid: data.fk_draw_typeid,
      event: data.event,
      event_description: data.event_description,
      start_date: data.start_date,
      end_date: data.end_date,
     };

     this.tournamentService.editTournament(this.tournamentId, this.tournamentData).then((result) => {
      this.router.navigate(['/tournaments']);
 
    }, (error) => {
       console.log(error);

     });
    }

    getDrawTypes() {
      this.drawTypeService.getDrawTypes().then(
        (result: DrawType[]) => {
          this.drawTypes = result
        },
        error => console.log(error)
      );
    }

    getEventTypes() {
      this.eventTypeService.getEventTypes().then(
        (result: EventType[]) => {
          this.eventTypes = result
        },
        error => console.log(error)
      );
    }

    getProfiles() {
      this.profileService.getProfiles().then(
        (result: Profile[]) => {
          this.profiles = result
        },
        error => console.log(error)
      );
    }

    initializeTournamentForm() {
      if (this.tournament==null) {
        this.tournament = new Tournament();
        this.tournament.fk_event_typeid = null;
        this.tournament.fk_draw_typeid = null;
        this.tournament.fk_profileid = null;
        this.tournament.event = null;
        this.tournament.event_description = null;
        this.tournament.start_date = null;
        this.tournament.end_date = null;
      }

      this.tournamentForm = this.formBuilder.group({
        fk_event_typeid: [this.tournament.fk_event_typeid, Validators.compose([Validators.required])],
        fk_draw_typeid: [this.tournament.fk_draw_typeid, Validators.compose([Validators.required])],
        fk_profileid: [this.tournament.fk_profileid, Validators.compose([Validators.required])],
        event: [this.tournament.event, Validators.compose([Validators.required])],
        event_description: [this.tournament.event_description, Validators.compose([Validators.required])],
        start_date: [this.tournament.start_date, Validators.compose([Validators.required])],
        end_date: [this.tournament.end_date, Validators.compose([Validators.required])],
      });
    }

    ngOnInit() {
      this.getProfiles();
      this.getEventTypes();
      this.getDrawTypes();
      this.getTournament(this.tournamentId)
    }
  }