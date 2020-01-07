import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { EventFormatService } from "src/app/shared/services/event-format.service";
import { EventFormat } from 'src/app/shared/interfaces/event-format';
import { Format } from 'src/app/shared/interfaces/format';
import { Router } from "@angular/router";
import { FormatService } from 'src/app/shared/services/format.service';
//import * as $ from "jquery";
@Component({
  selector: "app-add-event-format",
  templateUrl: "./add-event-format.component.html",
  styleUrls: ["./add-event-format.component.css"]
})
export class AddEventFormatComponent implements OnInit {
  @ViewChild("closeModal", null) closeModal: ElementRef;
  public moduleTitle: string = "Set Event Format";
  public eventFormatForm: FormGroup;
  public eventFormatData: any;

  @Output() eventFormatCreated = new EventEmitter<any>()
  @Input() eventId: number;
  public formats: Format[];

  constructor(
    private formBuilder: FormBuilder,
    private eventFormatService: EventFormatService,
    private formatService: FormatService,
    private router: Router
  ) {}


  addEventFormat() {
    let data = this.eventFormatForm.value
    let format = this.formats.find(format => format.pk_formatid == data.fk_formatid)
     this.eventFormatService.addEventFormat(this.eventFormatForm.value).then(
       (result:EventFormat) => {  
        this.eventFormatCreated.emit(format)
        this.closeModal.nativeElement.click()
       },
       error => console.log(error)
     );
  }

  getFormats() {
    this.formatService.getFormats().then(
      (result: Format[]) => {
        this.formats = result
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.getFormats()
    this.eventFormatForm = this.formBuilder.group({
      fk_formatid: ["", Validators.compose([Validators.required])],
      fk_eventid: this.eventId,
    });
  }
}
