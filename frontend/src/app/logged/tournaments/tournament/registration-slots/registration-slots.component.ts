import {Component, Input, OnInit} from '@angular/core';
import {Slot} from 'src/app/shared/interfaces/slot';
import {slotRegisterService} from 'src/app/shared/services/slot-register.service';
import {SlotRegister} from 'src/app/shared/interfaces/slotRegister';
import {SlotSizeService} from 'src/app/shared/services/slot-size.service';
import {SlotSize} from 'src/app/shared/interfaces/slot-size';
import {Profile} from '../../../../shared/interfaces/profile';
import {Tournament} from '../../../../shared/interfaces/tournament';


@Component({
  selector: 'app-registration-slots',
  templateUrl: './registration-slots.component.html',
  styleUrls: ['./registration-slots.component.css']
})
export class RegistrationSlotsComponent implements OnInit {
  @Input() slots: Slot[];
  @Input() tournament: Tournament;
  public days: any = [];
  public displayedSlots: Slot[];
  public day: number;
  public profileId: number; // loggedIn Profile
  public admin = true;
  public profileRegistered = false;
  public sizes: SlotSize[] = [];
  public show: any = false;
  public slotRegisterSwap: SlotRegister[] = [];
  public slotRegistered = false;
  public selectedProfile: Profile;
  public activeDay = 0; // 0 for day draw otherwise tournament draw

  constructor(
    private registerService: slotRegisterService,
    private sizeService: SlotSizeService
  ) {
    this.profileId = Number(localStorage.getItem('profileID'));
  }

  checkIfRegisteredOtherProfile(sizeId, registers) {
    return registers.find(registerItem => {
      return (
        registerItem.fk_profileid !== this.profileId &&
        registerItem.size.pk_slot_sizeid === sizeId
      );
    });
  }

  register(slotId, size) {

    if (this.profileRegistered) { return; }

    if (this.checkIfActiveDay(this.day)) { return; }

    const slot = this.slots.find(slotItem => slotItem.pk_slotid === slotId);
    if (this.checkIfRegisteredOtherProfile(size, slot.registers)) { return; }


    this.registerService
      .addSlotRegister({
        fk_profileid: this.profileId,
        fk_slotid: slotId,
        fk_slot_sizeid: size
      })
      .then(
        (result: SlotRegister) => {
          const index = this.slots.findIndex(slot => slot.pk_slotid === slotId);
          this.slots[index].registers.push(result);
          this.daySlots(this.day);
          this.profileRegistered = true;
        },
        error => {}
      );
  }

  checkProfileRegistered(registers: SlotRegister[]) {
    return registers.find(register => register.fk_profileid === this.profileId);
  }

  initProfileCheck() {
    const profileCheck = this.slots.find(slot =>
      this.checkProfileRegistered(slot.registers)
    );
    return profileCheck ? true : false;
  }

  getSlotSizes() {
    this.sizeService.getSlotSizes().then(
      (result: SlotSize[]) => {
        this.sizes = result;
      },
      error => {}
    );
  }

  cancelRegistration(registers: SlotRegister[]) {
    const register = registers.find(
      registerItem => registerItem.fk_profileid === this.profileId
    );
    this.registerService.deleteSlotRegister(register.pk_registerid).then(
      result => {
        const index = this.slots.findIndex(
          slot => slot.pk_slotid === register.fk_slotid
        );
        this.slots[index].registers.splice(
          this.slots[index].registers.indexOf(register)
        );
        this.daySlots(this.day);
        this.profileRegistered = false;
      },
      error => { }
    );
  }

  ngOnChanges(): void {
    this.slots.forEach(
      slot => (slot.slot_time = this.createDateTime(slot.slot_time))
    );

    this.day = 1;
    this.findDays();
    this.profileRegistered = this.initProfileCheck();

    // day draw
    if (!this.activeDay) {
       this.daySlots(this.day);
       return;
    }
    // tournament draw
    this.daySlots(this.activeDay);
  }

  findDays() {
    this.days = Array.from(new Set(this.slots.map(item => item.day)));
    this.days.forEach(day => {
    if (this.checkIfCanRegister(day)) {
        this.activeDay = day;
    }
    });
  }

  createDateTime(time): Date {
    const date = new Date();
    const splitted = time.split(':');
    date.setHours(splitted[0]);
    date.setMinutes(splitted[1]);
    return date;
  }

  daySlots(day) {
    this.day = day;
    this.displayedSlots = this.slots.filter(slot => slot.day === day);
  }

  ngOnInit() {
    this.getSlotSizes();
  }

  fetchRegisterProfileId(sizeId: number, registers: SlotRegister[]) {
    const register =  this.checkIfRegistered(sizeId, registers);
    return register.profile;
  }

  displayRegisterProfile(sizeId: number, registers: SlotRegister[]) {
    const register =  this.checkIfRegistered(sizeId, registers);

    if (register === undefined) {
       return 'register';
    }
    return register.profile.user.first_name + ' ' + register.profile.user.last_name;
  }

  checkIfRegistered(sizeId: number, registers: SlotRegister[]) {
    const register = registers.find(register => {
      return (
        register.size.pk_slot_sizeid === sizeId
      );
    });
    if (register) {
      this.slotRegistered = true;
      return register;
    }
    this.slotRegistered = false;
    return register;
  }

  checkIfRegisteredOnProfile(sizeId, registers) {
    const register = this.checkIfRegistered(sizeId, registers);
    return register && register.profile.pk_profileid === this.profileId;
  }
  selectToSwap(sizeId, slot: Slot) {

    if (!this.admin) {
      return;
    }
    const register =  this.checkIfRegistered(sizeId, slot.registers);
    const checkRegister = this.slotRegisterSwap.find(slotRegister => slotRegister === register);

    if (register === undefined || checkRegister) {
      const index = this.slotRegisterSwap.findIndex(regi => regi === checkRegister);
      this.slotRegisterSwap.splice(index, 1);
      return;
    }
    this.slotRegisterSwap.push(register);
    this.swapSlot();
  }

  swapSlot() {
    if (this.slotRegisterSwap.length === 2) {
      this.updateSlotRegistration(this.slotRegisterSwap[0].pk_registerid, this.slotRegisterSwap[1]);
      this.updateSlotRegistration(this.slotRegisterSwap[1].pk_registerid, this.slotRegisterSwap[0]);

      const profileOne = this.slotRegisterSwap[0].profile;
      const profileTwo = this.slotRegisterSwap[1].profile;

      this.updateSlotArray(this.slotRegisterSwap[1], profileOne);
      this.updateSlotArray(this.slotRegisterSwap[0], profileTwo);

      this.slotRegisterSwap = [];
    }
  }

  updateSlotArray(register: SlotRegister, profile: Profile) {

    const slotIndex = this.slots.findIndex(slot => slot.pk_slotid === register.fk_slotid);
    const registerIndex = this.slots[slotIndex].registers.findIndex(registerItem => registerItem.pk_registerid === register.pk_registerid);
    this.slots[slotIndex].registers[registerIndex].profile = profile;
  }

  updateSlotRegistration(id, slotRegister: SlotRegister) {
     const updateData = {
       reg_date: slotRegister.reg_date,
       fk_profileid: slotRegister.profile.pk_profileid,
     };
     this.registerService.editSlotRegister(id, updateData).then(
      (result) => {
      },
      error => {
      }
    );
  }

  checkIfSlotSelected(sizeId: number, registers: SlotRegister[]) {
    const register =  this.checkIfRegistered(sizeId, registers);
    if (register === undefined) {
      return false;
    }
    return this.slotRegisterSwap.find(slotRegister => slotRegister === register);
  }


  checkIfCanRegister(day: any) { // check Active day for tournament draw
    const checkIfTournamentDrawType = this.tournament.draw_type.draw_type.toLowerCase().includes('tournament');

    if (checkIfTournamentDrawType) {
       const startDate = new Date(this.tournament.start_date);
       startDate.setDate(startDate.getDate() + day - 1);
       return startDate.toLocaleDateString() === new Date().toLocaleDateString();
    }
    return false;
  }

  checkIfActiveDay(day: any) {
    if (this.activeDay === 0) { // day draw
      return false;
    }
    return day !== this.activeDay;
  }
}
