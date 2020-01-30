import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Tournament } from "src/app/shared/interfaces/tournament";
import { TournamentService } from "src/app/shared/services/tournament.service";
import { EventCourseType } from "src/app/shared/interfaces/eventCourseType";
import { EventCourseTypeService } from "src/app/shared/services/event-course-type.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventCourseTypeCommunicationService } from '../../../shared/services/event-course-type-communication.service';
@Component({
  selector: 'app-event-course-type-detail',
  templateUrl: './event-course-type-detail.component.html',
  styleUrls: ['./event-course-type-detail.component.css'],
  providers: [EventCourseTypeService]
})

export class EventCourseTypeDetailComponent implements OnInit {
  moduleTitle = 'Event Course Type Details';
  public tournament: Tournament;
  public tournamentId: number;
  public eventCourseTypeId: number;
  @Input() eventCourseTypes: EventCourseType[];
  @Input() eventCourseTypeCreated: EventCourseType[];
  private courseTypeSubscription: Subscription
                                                                                        
  constructor(
    private tournamentService: TournamentService,
    private eventCourseTypeService: EventCourseTypeService,
    private router: Router,
    private communicationService: EventCourseTypeCommunicationService,
    private activatedRoute: ActivatedRoute,


  ) {
    
    this.subscribeToCommunicationService();
    this.tournamentId = this.activatedRoute.snapshot.params['id'];
  }
  
  subscribeToCommunicationService(){
    this.courseTypeSubscription = this.communicationService.getAddEventCourseType().subscribe(
      (result:EventCourseType) => {
        this.eventCourseTypes.push(result);
      }
    )
  }

  getEventCourseTypes() {
    this.eventCourseTypeService.getEventCourseTypes().then((result:EventCourseType[]) => {
    this.eventCourseTypes = result;
    }, (error) => {
    });
  }

  deleteEventCourseType(eventCourseTypeId) {
    console.log(eventCourseTypeId)
    this.eventCourseTypeService.deleteEventCourseType(eventCourseTypeId).then((result:EventCourseType) => {
      this.eventCourseTypes = this.eventCourseTypes.filter(event => event.pk_event_course_typeid !== eventCourseTypeId)
        
    }, (error) => {
    });
  }

  checkIfEmpty(){
    return Array.isArray(this.eventCourseTypes) && this.eventCourseTypes.length
  }

  getTournament(){
    this.tournamentService.getTournament(this.tournamentId).then(
      (result:Tournament) => {
      this.tournament = result;
    },
    error => console.log(error)
    );
  }

  ngOnInit() {
    this.getTournament(); 
  }
}
