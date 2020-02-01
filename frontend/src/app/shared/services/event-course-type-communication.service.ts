 import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Tournament } from "../interfaces/tournament";
import { EventCourseType } from "../interfaces/eventCourseType";

@Injectable({
  providedIn: "root"
})
export class EventCourseTypeCommunicationService {
  private viewEventCourseTypeSubject = new Subject<EventCourseType>();
  private addEventCourseTypeSubject = new Subject<EventCourseType>();

  constructor() {}

  sendAddEventCourseTypeEvent(eventCourseType: EventCourseType) {
    this.addEventCourseTypeSubject.next(eventCourseType);
  }

  getAddEventCourseType(): Observable<EventCourseType> {
    return this.addEventCourseTypeSubject.asObservable();
  }

  sendViewEventCourseTypeEvent(eventCourseTypes: EventCourseType) {
    this.viewEventCourseTypeSubject.next(eventCourseTypes);
  }

  getViewEventCourseType(): Observable<EventCourseType> {
    return this.viewEventCourseTypeSubject.asObservable();
  }

}
