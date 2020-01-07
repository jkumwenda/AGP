import { Component, OnInit, Input } from "@angular/core";
import { Slot } from "src/app/shared/interfaces/slot";
import { slotRegisterService } from "src/app/shared/services/slot-register.service";
import { SlotRegister } from "src/app/shared/interfaces/slotRegister";
import { SlotSizeService } from "src/app/shared/services/slot-size.service";
import { SlotSize } from "src/app/shared/interfaces/slot-size";

@Component({
  selector: "app-registration-slots",
  templateUrl: "./registration-slots.component.html",
  styleUrls: ["./registration-slots.component.css"]
})
export class RegistrationSlotsComponent implements OnInit {
  @Input() slots: Slot[];
  public days: any = [];
  public displayedSlots: Slot[];
  public day: number;
  public profileId: number = 2; //loggedIn Profile
  public profileRegistered: Boolean = false;
  public sizes: SlotSize[] = [];

  constructor(
    private registerService: slotRegisterService,
    private sizeService: SlotSizeService
  ) {}

  checkIfRegistered(sizeId, registers) {
    let register = registers.find(register => {
      return (
        register.fk_profileid == this.profileId &&
        register.size.pk_slot_sizeid == sizeId
      );
    });

    if (this.checkIfRegisteredOtherProfile(sizeId, registers)) return "danger";

    if (!this.profileRegistered) return "primary";
    else return register ? "success" : "secondary";
  }

  checkIfRegisteredOtherProfile(sizeId, registers) {
    let register = registers.find(register => {
      return (
        register.fk_profileid !== this.profileId &&
        register.size.pk_slot_sizeid == sizeId
      );
    });

    return register;
  }

  register(slotId, size) {

    if (this.profileRegistered) return;
    let slot = this.slots.find(slot => slot.pk_slotid == slotId);
    if (this.checkIfRegisteredOtherProfile(size,slot.registers)) return

      this.registerService
        .addSlotRegister({
          fk_profileid: this.profileId,
          fk_slotid: slotId,
          fk_slot_sizeid: size
        })
        .then(
          (result: SlotRegister) => {
            let index = this.slots.findIndex(slot => slot.pk_slotid == slotId);
            this.slots[index].registers.push(result);
            this.daySlots(this.day);
            this.profileRegistered = true;
          },
          error => console.log(error)
        );
  }

  checkProfileRegistered(registers: SlotRegister[]) {
    return registers.find(register => register.fk_profileid == this.profileId);
  }

  initProfileCheck() {
    let profileCheck = this.slots.find(slot =>
      this.checkProfileRegistered(slot.registers)
    );
    return profileCheck ? true : false;
  }

  getSlotSizes() {
    this.sizeService.getSlotSizes().then(
      (result: SlotSize[]) => {
        this.sizes = result;
      },
      error => console.log(error)
    );
  }

  cancelRegistration(registers: SlotRegister[]) {
    console.log(registers);
    let register = registers.find(
      register => register.fk_profileid == this.profileId
    );
    this.registerService.deleteSlotRegister(register.pk_registerid).then(
      result => {
        let index = this.slots.findIndex(
          slot => slot.pk_slotid == register.fk_slotid
        );
        this.slots[index].registers.splice(
          this.slots[index].registers.indexOf(register)
        );
        this.daySlots(this.day);
        this.profileRegistered = false;
      },
      error => console.log(error)
    );
  }

  ngOnChanges(): void {
    console.log(this.slots);
    this.slots.forEach(
      slot => (slot.slot_time = this.createDateTime(slot.slot_time))
    );
    this.day = 1;
    this.findDays();
    this.daySlots(this.day);
    this.profileRegistered = this.initProfileCheck();
  }

  findDays() {
    this.days = Array.from(new Set(this.slots.map(item => item.day)));
  }

  createDateTime(time): Date {
    let date = new Date();
    let splitted = time.split(":");
    date.setHours(splitted[0]);
    date.setMinutes(splitted[1]);
    return date;
  }

  daySlots(day) {
    this.day = day;
    this.displayedSlots = this.slots.filter(slot => slot.day == day);
  }

  ngOnInit() {
    console.log(this.slots);
    this.getSlotSizes();
  }
}
