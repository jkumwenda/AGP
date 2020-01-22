import { Time } from '@angular/common';
import { SlotRegister } from './slotRegister';

export class Slot {
  pk_slotid: number;
  slot_time: Date;
  day: number;
  fk_fieldid: number;
  registers: SlotRegister[];
}
