import { Component, OnInit } from '@angular/core';
import { EventType } from '../../../shared/interfaces/event-type';
import { Router } from '@angular/router';
import { EventTypeService } from '../../../shared/services/event-type.service';
import {PermissionCheckService} from '../../../shared/services/permission-check.service';

@Component({
  selector: 'app-event-types',
  templateUrl: './event-types.component.html',
  styleUrls: ['./event-types.component.css']
})
export class EventTypesComponent implements OnInit {
  moduleTitle = 'Event Type';
  public eventTypes: EventType[];
  public permissionCodes = ['addEventType', 'viewEventType', 'editEventType', 'deleteEventType'];
  public loggedProfile = 2;
  public profilePermissions: string[] = [];

  constructor(
    private eventTypeService: EventTypeService,
    private permissionCheckService: PermissionCheckService,
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
  checkPermissions() {
    this.permissionCheckService.permissionCheck(this.loggedProfile, this.permissionCodes).then(
      (result: string[]) => this.profilePermissions = result,
      (error) => console.log(error)
    );
  }

  checkIfPermitted(code) {
    return this.profilePermissions.find(item => item === code);
  }


  ngOnInit() {
    this.getEventTypes();
    this.checkPermissions();
  }
}
