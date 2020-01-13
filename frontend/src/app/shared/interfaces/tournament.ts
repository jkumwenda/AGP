import { Field } from './field';
import { EventType } from './event-type';
import { DrawType } from './draw-type';
import { EventFormat } from './event-format';
import { Profile } from './profile';
import { Information } from './information';
import { RegistrationDate } from './registration-date';

export class Tournament {

    pk_eventid: number;
    event: string;
    event_description: string;
    start_date: Date;
    end_date: Date;
    draw_type: DrawType;
    eventType: EventType;
    profile: Profile;
    fk_draw_typeid: number;
    fk_event_typeid: number;
    fk_profileid: number;

    information:Information[];
    eventFormat:EventFormat[];
    registrationDate:RegistrationDate[];

    constructor(){
      this.information=[]
      this.eventFormat=[]
      this.registrationDate=[]
      this.draw_type = new DrawType()
    }
  pk_eventid: number;
  event: string;
  event_description: string;
  start_date: Date;
  end_date: Date;
  fk_draw_typeid: number;
  fk_event_typeid: number;
  fk_profileid: number;
  field: Field[]

  constructor(id,event,sDate,eDate){
    this.pk_eventid=id;
    this.event=event;
    this.start_date=sDate;
    this.end_date=eDate;
    this.field=[]
  }
  static initialize = () => new Tournament(null,null,null,null)
}
