import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";
import { RegistrationDate } from "src/app/shared/interfaces/registration-date";
import { RegistrationDateService } from "src/app/shared/services/registration-date.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-registration-date',
  templateUrl: './edit-registration-date.component.html',
  styleUrls: ['./edit-registration-date.component.css']
})
export class EditRegistrationDateComponent implements OnInit {
  @Input() registrationDateId: number;
  @Input() eventId: number;
  @Output() registrationDateEdited = new EventEmitter<any>()
  @ViewChild("closeModal", null) closeModal: ElementRef;

  public moduleTitle: string = "Edit Registration Date";
  public registrationDateForm: FormGroup;
  private registrationDateData: any;
  public registrationDate: RegistrationDate;
  public registrationDates: RegistrationDate[];


  constructor(
    private formBuilder: FormBuilder,
    private registrationDateService: RegistrationDateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
     //this.eventId = activatedRoute.snapshot.params['id'];
     this.initializeRegistrationDateForm();
   }

   getRegistrationDate(registrationDateId){
     
     
     this.registrationDateService.getRegistrationDate(registrationDateId).then((result) => {
       this.registrationDate = result as RegistrationDate;
       
       this.initializeRegistrationDateForm();
       //console.log(RegistrationDate);

     }, (error) => {
     });
     }

   editRegistrationDate(registrationDateId){
     const data = this.registrationDateForm.value;
     console.log(this.registrationDateForm.value)
     this.registrationDateData = {
       open_date: data.open_date,
       close_date: data.close_date,
     };

     //let registrationDate = this.registrationDates.find(re=> re.pk_registration_dateid===this.registrationDateData.fk_registration_dateid)
     this.registrationDateService.editRegistrationDate(this.registrationDateId, this.registrationDateData).then((result) => {
      
       //this.registrationDateEdited.emit(registrationDate)
       
       this.closeModal.nativeElement.click()
    }, (error) => {
       console.log(error);

     });
    }

    initializeRegistrationDateForm() {
      if (this.registrationDate==null) {
        this.registrationDate = new RegistrationDate(null,null);
        this.registrationDate.open_date = null;
        this.registrationDate.close_date = null;
      }

      this.registrationDateForm = this.formBuilder.group({
        open_date: [this.registrationDate.open_date, Validators.compose([Validators.required])],
        close_date: [this.registrationDate.close_date, Validators.compose([Validators.required])],
        fk_eventid: this.eventId,
      });
      
    }

    ngOnInit() {
      this.getRegistrationDate(this.registrationDateId)
    }
  }