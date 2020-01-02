import { Slot } from './slot';

export class Field {

  pk_fieldid:number;
  fk_eventid:number;
  field_type:string;
  slots:Slot[]

  constructor(fieldType){
    this.field_type=fieldType
  }
}
