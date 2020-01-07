import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter,  } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { RegistrationDateService } from "src/app/shared/services/registration-date.service";
import { RegistrationDate } from 'src/app/shared/interfaces/registration-date';
import { Router } from "@angular/router";
//import * as $ from "jquery";
@Component({
  selector: "app-add-registration-date",
  templateUrl: "./add-registration-date.component.html",
  styleUrls: ["./add-registration-date.component.css"]
})
export class AddRegistrationDateComponent implements OnInit {
  @ViewChild("closeModal", null) closeModal: ElementRef;
  public moduleTitle: string = "Set Registration Date";
  public registrationDateForm: FormGroup;
  public registrationDateData: any;
  @Input() eventId: number;
  public registrationDates: RegistrationDate[];
  @Output() registrationDateCreated = new EventEmitter<any>()
  //@ViewChild("closeModal", null) closeModal: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private registrationDateService: RegistrationDateService,
    private router: Router
  ) {}


  addRegistrationDate() {
    let data = this.registrationDateForm.value
   
    //let registration = this.registrationDates.find(regd => regd.pk_registration_dateid == data.fk_registration_dateid)
    //console.log(this.registrationDates)
    //console.log(this.registrationDateForm.value);
    //return
     this.registrationDateService.addRegistrationDate(this.registrationDateForm.value).then(
       (result:RegistrationDate) => {
        this.registrationDateCreated.emit(result)
        this.closeModal.nativeElement.click()
         console.log(result)

       },
       error => console.log(error)
     );
  }

 
 

  ngOnInit() {
    this.registrationDateForm = this.formBuilder.group({
      open_date: ["", Validators.compose([Validators.required])],
      close_date: ["", Validators.compose([Validators.required])],
      fk_eventid: this.eventId,
    });

    /** manually selecting bootstrap version for bootstrap-select plugin  */
    // $('select').selectpicker()
    // $.fn.selectpicker.Constructor.BootstrapVersion = "4";
    // $('select').selectpicker('refresh')
  }
}

