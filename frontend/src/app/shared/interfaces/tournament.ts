import { Field } from './field';
import { EventType } from './event-type';
import { DrawType } from './draw-type';
import { EventFormat } from './event-format';
import { Profile } from './profile';
import { Information } from './information';
import { EventCourseType } from './eventCourseType';
import { RegistrationDate } from './registration-date';
import { Course } from './course';

export class Tournament {

    pk_eventid: number;
    event: string;
    event_description: string;
    holes: number;
    start_date: Date;
    end_date: Date;
    draw_type: DrawType;
    eventType: EventType;
    profile: Profile;
    fk_draw_typeid: number;
    fk_event_typeid: number;
    fk_profileid: number;
    fk_courseid: number;
    information: Information[];
    eventFormat: EventFormat[];
    eventCourseType: EventCourseType[];
    registrationDate: RegistrationDate[];
    field: Field[];
    status: string;

    constructor(id, event, sDate, eDate) {
      this.information = [];
      this.eventFormat = [];
      this.registrationDate = [];
      this.eventCourseType = [];
      this.draw_type = new DrawType();
      this.pk_eventid = id;
      this.event = event;
      this.start_date = sDate;
      this.end_date = eDate;
      this.field = [];

    }


    static initialize = () => new Tournament(null, null, null, null);
}
