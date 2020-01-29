import { Tournament } from './tournament';
import { Format } from './format';

export class EventFormat {
    pk_event_formatid: number;
    event: Tournament;
    fk_formatid: number;
    format: Format;
    fk_eventid: number;

    constructor(id,eventId){
        this.pk_event_formatid=id
        this.fk_eventid=eventId
        this.format = new Format()
      }

  }
  
  