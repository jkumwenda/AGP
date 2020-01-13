import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { InformationService } from "src/app/shared/services/information.service";
import { Information } from 'src/app/shared/interfaces/information';
import { Router } from "@angular/router";

@Component({
  selector: "app-add-information",
  templateUrl: "./add-information.component.html",
  styleUrls: ["./add-information.component.css"]
})
export class AddInformationComponent implements OnInit {
  @ViewChild("closeModal", null) closeModal: ElementRef;
  public moduleTitle: string = "Set Information";
  public informationForm: FormGroup;
  public informationData: any;
  public informations: Information[];
  @Input() eventId: number;
  @Output() informationUpdated = new EventEmitter<any>()

  constructor(
    private formBuilder: FormBuilder,
    private informationService: InformationService,
    private router: Router
  ) {}


  addInformation() {
    let data=this.informationForm.value
     this.informationService.addInformation(this.informationForm.value).then(

        (result:Information) => {
          this.informationUpdated.emit(this.informationForm.value)
          this.closeModal.nativeElement.click()
        },
    
       error => console.log(error)
     );
  }

  ngOnInit() {
    this.informationForm = this.formBuilder.group({
      info: ["", Validators.compose([Validators.required])],
      fk_eventid: this.eventId,
    });
  }
}

