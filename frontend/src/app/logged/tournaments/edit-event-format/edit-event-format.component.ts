import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { EventFormat } from "src/app/shared/interfaces/event-format";
import { Format } from "src/app/shared/interfaces/format";
import { FormatService } from "src/app/shared/services/format.service";
import { EventFormatService } from "src/app/shared/services/event-format.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-event-format',
  templateUrl: './edit-event-format.component.html',
  styleUrls: ['./edit-event-format.component.css']
})

export class EditEventFormatComponent implements OnInit {
  @Input() eventFormatId;
  @Input() eventId: number;
  @Output() formatEdited = new EventEmitter<any>();
  @ViewChild("closeModal", null) closeModal: ElementRef;

  public moduleTitle = "Edit Event Format";
  public eventFormatForm: FormGroup;
  private eventFormatData: any;
  public eventFormat: EventFormat;
  public formats: Format[];

  constructor(
    private formBuilder: FormBuilder,
    private eventFormatService: EventFormatService,
    private formatService: FormatService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
     this.initializeEventFormatForm();
   }

   getEventFormat(eventFormatId){
     this.eventFormatService.getEventFormat(eventFormatId).then((result) => {
       this.eventFormat = result as EventFormat;
       this.initializeEventFormatForm();

     }, (error) => {
     });
     }

   editEventFormat(eventFormatId){
     const data = this.eventFormatForm.value;
     this.eventFormatData = {
      fk_formatid: data.fk_formatid,
     };
     this.eventFormatService.editEventFormat(this.eventFormatId, this.eventFormatData).then((result: EventFormat) => {
       this.formatEdited.emit(result);
       this.closeModal.nativeElement.click();

    }, (error) => {
       console.log(error);

     });
    }

    getFormats() {
      this.formatService.getFormats().then(
        (result: Format[]) => {
          this.formats = result
        },
        error => console.log(error)
      );
    }

    initializeEventFormatForm() {
      if (this.eventFormat==null) {
        this.eventFormat = new EventFormat(null, null);
        this.eventFormat.fk_formatid = null;
      }

      this.eventFormatForm = this.formBuilder.group({
        fk_formatid: [this.eventFormat.fk_formatid, Validators.compose([Validators.required])],
        fk_eventid: this.eventId,
      });
    }

    ngOnInit() {
      this.getFormats();
      this.getEventFormat(this.eventFormatId)
    }
  }
