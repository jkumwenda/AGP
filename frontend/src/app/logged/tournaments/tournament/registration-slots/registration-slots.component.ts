import { Component, OnInit, Input } from '@angular/core';
import { Slot } from 'src/app/shared/interfaces/slot';
import { slotRegisterService } from 'src/app/shared/services/slot-register.service';
import { SlotRegister } from 'src/app/shared/interfaces/slotRegister';

@Component({
  selector: 'app-registration-slots',
  templateUrl: './registration-slots.component.html',
  styleUrls: ['./registration-slots.component.css']
})
export class RegistrationSlotsComponent implements OnInit {

  @Input() slots: Slot[]
  public days:any = []
  public displayedSlots:Slot[]
  public day:number
  public profileId:number=1; //loggedIn Profile
  public profileRegistered:Boolean=false


  constructor(
    private registerService: slotRegisterService
  ) { }

  register(slotId){

    this.registerService.addSlotRegister({fk_profileid:this.profileId, fk_slotid:slotId}).then(
      (result:SlotRegister) => {
        let index = this.slots.findIndex(slot => slot.pk_slotid == slotId)
        this.slots[index].registers.push(result)
        this.daySlots(this.day)
        this.profileRegistered=true
      },
      error=> console.log(error)
    )

  }

  checkProfileRegistered(registers:SlotRegister[]){
    return registers.find(register => register.fk_profileid==this.profileId)
  }

  cancelRegistration(registers:SlotRegister[]){

    console.log(registers)
    let register = registers.find(register => register.fk_profileid==this.profileId)
    this.registerService.deleteSlotRegister(register.pk_registerid).then(
      result=> {
        let index = this.slots.findIndex(slot => slot.pk_slotid == register.fk_slotid)
        this.slots[index].registers.splice(this.slots[index].registers.indexOf(register))
        this.daySlots(this.day)
        this.profileRegistered=false
      },
      error => console.log(error)
    )
  }

  ngOnChanges(): void {
    this.slots.forEach(slot=> slot.slot_time = this.createDateTime(slot.slot_time))
    this.day=1
    this.findDays()
    this.daySlots(this.day)
  }

  findDays(){
    this.days = Array.from(new Set(this.slots.map(item => item.day)))
  }


  createDateTime(time):Date{
    let date= new Date()
    let splitted = time.split(':')
    date.setHours(splitted[0])
    date.setMinutes(splitted[1])
    return date
  }

  daySlots(day){
    this.day=day
    this.displayedSlots= this.slots.filter(slot=> slot.day==day)
  }


  ngOnInit() {

  }

}
