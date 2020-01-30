
export class EventCourseType {
    pk_event_course_typeid: number;
    fk_eventid: number;
    fk_genderid: number;
    fk_course_typeid: number;

    constructor(id,eventId,genderId,couseTypeId){
        this.pk_event_course_typeid=id
        this.fk_eventid=eventId
        this.fk_genderid=genderId
        this.fk_course_typeid=couseTypeId
      }

  }
  
  