import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventTypeService } from '../../../../shared/services/event-type.service';
import { EventType } from '../../../../shared/interfaces/event-type';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-event-type',
  templateUrl: './edit-event-type.component.html',
  styleUrls: ['./edit-event-type.component.css']
})
export class EditEventTypeComponent implements OnInit {
  moduleTitle = 'Edit Event TYpe';
  public eventTypeForm: FormGroup;
  private eventTypeData: any;
  public eventTypeId: any;
  public eventType: EventType;

  constructor(
    private formBuilder: FormBuilder,
    private eventTypeService: EventTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.eventTypeId = activatedRoute.snapshot.params['id'];
    this.initializeEventTypeForm();
  }

  getEventType(eventTypeId) {
    this.eventTypeService.getEventType(eventTypeId).then((result) => {
      this.eventType = result as EventType;
      this.initializeEventTypeForm();
    }, (error) => {
    });
  }

  editEventType() {
    const data  = this.eventTypeForm.value;
    this.eventTypeData = {
      event_type: data.event_type,
    };

    this.eventTypeService.editEventType(this.eventTypeId, this.eventTypeData).then((result) => {
      this.router.navigate(['/manage/event-types/']);
    }, (error) => {
      console.log(error);
    });
  }

  initializeEventTypeForm() {
    if (this.eventType == null) {
      this.eventType = new EventType();
      this.eventType.event_type = null;
    }
    this.eventTypeForm = this.formBuilder.group({
      event_type: [this.eventType.event_type, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.getEventType(this.eventTypeId);
  }

}


