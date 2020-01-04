import { Field } from './field';
import { EventType } from './event-type';
import { DrawType } from './draw-type';
import { Profile } from './profile';

export class Tournament {
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
