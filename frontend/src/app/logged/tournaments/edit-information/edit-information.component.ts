import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from "@angular/core";
import { Information } from "src/app/shared/interfaces/information";
import { InformationService } from "src/app/shared/services/information.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.css']
})
export class EditInformationComponent implements OnInit {
  @Input() informationId: number;
  @Input() eventId: number;
  @ViewChild("closeModal", null) closeModal: ElementRef;
  @Output() informationUpdated = new EventEmitter<Information>();

  public moduleTitle: string = "Edit Information";
  public informationForm: FormGroup;
  private informationData: any;
  public information: Information;


  constructor(
    private formBuilder: FormBuilder,
    private informationService: InformationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) 
  {

     this.initializeInformationForm();
   }

   getInformation(informationId){
     
     this.informationService.getInformation(informationId).then((result) => {
       this.information = result as Information;
       this.initializeInformationForm();

     }, (error) => {
     });
     }

   editInformation(informationId){
  
     const data = this.informationForm.value;
     this.informationData = {
       pk_informationid:this.informationId,
       info: data.info,
     };

     this.informationService.editInformation(this.informationId, this.informationData).then(
       (result) => {
         this.informationUpdated.emit(this.informationData)
         this.closeModal.nativeElement.click()
       }
 
    , (error) => {
       console.log(error);

     });
    }

    initializeInformationForm() {
      if (this.information==null) {
        this.information = new Information(null, null);
        this.information.info = null;
      }

      this.informationForm = this.formBuilder.group({
        info: [this.information.info, Validators.compose([Validators.required])],
        fk_eventid: this.eventId,
      });
    }

    ngOnInit() {
      console.log(this.informationId)
      this.getInformation(this.informationId)
    }
  }