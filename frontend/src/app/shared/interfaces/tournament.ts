import { EventType } from './event-type';
import { DrawType } from './draw-type';
import { Profile } from './profile';

export class Tournament {
    pk_eventid: number;
    event: string;
    event_desc: string;
    start_date: Date;
    end_date: Date;
    drawTYpe: DrawType;
    eventType: EventType;
    profile: Profile;
  }
  