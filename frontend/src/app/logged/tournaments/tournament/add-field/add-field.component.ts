import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from "@angular/core";
import { FieldService } from "src/app/shared/services/field.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Field } from 'src/app/shared/interfaces/field';
import { Slot } from 'src/app/shared/interfaces/slot';


@Component({
  selector: "app-add-field",
  templateUrl: "./add-field.component.html",
  styleUrls: ["./add-field.component.css"]
})
export class AddFieldComponent implements OnInit {
  @Input() tournamentId: number;
  @Output() fieldCreatedEvent = new EventEmitter<Field>()
  @ViewChild("closeModal", null) closeModal: ElementRef;

  public fieldForm: FormGroup;
  public moduleTitle:string='Add Field'

  constructor(
    private fieldService: FieldService,
    private formBuilder: FormBuilder
  ) {}

  addField(){

    this.fieldService.addField(this.fieldForm.value).then(
      (result:Field) => {
          this.fieldCreatedEvent.emit(result)
          console.log(result)

          this.initializeFieldForm()
          this.closeModal.nativeElement.click()
      },
      error=> console.log(error)
    )
  }

  initializeFieldForm(){
    this.fieldForm= this.formBuilder.group({
      'fk_eventid':this.tournamentId,
      'field_type':['', Validators.compose([Validators.required])]
    })
  }

  ngOnChanges(): void {
    this.initializeFieldForm()
  }

  ngOnInit() {

  }
}
