export class SlotRegister {
  pk_registerid: number;
  reg_date: Date;
  fk_profileid:number;
  fk_slotid:number

  constructor(profile,slot){
    this.fk_profileid=profile
    this.fk_slotid=slot
  }
}
