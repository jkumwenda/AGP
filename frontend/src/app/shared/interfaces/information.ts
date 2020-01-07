import { Tournament } from './tournament';

export class Information {
    pk_informationid: number;
    fk_eventid:number
    event: Tournament;
    info: string;

    constructor(id,info){
      this.pk_informationid=id
      this.info=info
    }
  }
  