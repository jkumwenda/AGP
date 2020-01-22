import { SlotSize } from './slot-size';
import {Profile} from './profile';

export class SlotRegister {
  pk_registerid: number;
  reg_date: Date;
  fk_profileid: number;
  fk_slotid: number;
  fk_sizeid: number;
  size: SlotSize;
  profile: Profile;

  constructor(profile, slot) {
    this.fk_profileid = profile;
    this.fk_slotid = slot;
  }
}
