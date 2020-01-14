import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Field} from '../../../../shared/interfaces/field';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldService} from '../../../../shared/services/field.service';

@Component({
  selector: 'app-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.css']
})
export class EditFieldComponent implements OnInit {
  @Output() editFieldEvent = new EventEmitter<Field>();
  @ViewChild('closeModal', null) closeModal: ElementRef;

  @Input() field: Field;
  public fieldForm: FormGroup;
  public moduleTitle = 'edit Field';

  constructor(
    private fieldService: FieldService,
    private formBuilder: FormBuilder
  ) {}

  editField() {

    this.fieldService.editField(this.field.pk_fieldid, this.fieldForm.value).then(
      (result: Field) => {
        this.editFieldEvent.emit(result);
        this.initializeFieldForm();
        this.closeModal.nativeElement.click();
      },
      error => {}
    );
  }

  initializeFieldForm() {
    this.fieldForm = this.formBuilder.group({
      fk_eventid: this.field.fk_eventid,
      field_type: [this.field.field_type, Validators.compose([Validators.required])]
    });
  }

  ngOnChanges(): void {
    this.initializeFieldForm();
  }

  ngOnInit() {
    this.initializeFieldForm();
  }

}
