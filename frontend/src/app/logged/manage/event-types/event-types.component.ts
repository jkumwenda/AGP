import { Component, OnInit } from '@angular/core';
import { EventType } from '../../../shared/interfaces/event-type';
import { Router } from '@angular/router';
import { EventTypeService } from '../../../shared/services/event-type.service';

@Component({
  selector: 'app-event-types',
  templateUrl: './event-types.component.html',
  styleUrls: ['./event-types.component.css']
})
export class EventTypesComponent implements OnInit {
  moduleTitle = 'Event Type';
  public eventTypes: EventType[];

  constructor(
    private eventTypeService: EventTypeService,
    private router: Router,
  ) { }

  getEventTypes() {
    this.eventTypeService.getEventTypes().then((result) => {
      this.eventTypes = result as EventType[];
    }, (error) => {
    });
  }

  checkIfEmpty(){
    return Array.isArray(this.eventTypes) && this.eventTypes.length
  }

  editEventType(eventTypeId) {
    this.router.navigate(['/manage/edit-event-type', eventTypeId]);
  }

  deleteEventType(eventTypeId) {
    this.eventTypeService.deleteEventType(eventTypeId).then((result) => {
      this.getEventTypes();
    }, (error) => {
    });
  }

  ngOnInit() {
    this.getEventTypes();
  }
}
