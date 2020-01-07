import { Tournament } from './tournament';

export class 
RegistrationDate {
    pk_registration_dateid: number;
    eventId: Tournament;
    open_date: RegistrationDate;
    close_date: RegistrationDate
    fk_eventid:number;

    //constructor(odate,cdate){
      //this.close_date=cdate
      //this.open_date=odate
    //}

    constructor(id,eventId){
      this.pk_registration_dateid=id
      this.fk_eventid=eventId
    }
  }



  