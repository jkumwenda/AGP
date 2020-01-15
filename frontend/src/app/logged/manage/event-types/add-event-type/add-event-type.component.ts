import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventTypeService } from '../../../../shared/services/event-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event-type',
  templateUrl: './add-event-type.component.html',
  styleUrls: ['./add-event-type.component.css']
})
export class AddEventTypeComponent implements OnInit {
  moduleTitle = 'Add Event Type';
  public eventTypeForm: FormGroup;
  private eventTypeData: any;

  constructor(
    private formBuilder: FormBuilder,
    private eventTypeService: EventTypeService,
    private router: Router
  ) { }

  addEventType() {
    const data  = this.eventTypeForm.value;
    this.eventTypeData = {
       event_type: data.event_type
    };
      
    this.eventTypeService.addEventType(this.eventTypeData).then((result) => {
      this.router.navigate(['/manage/event-types']);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.eventTypeForm = this.formBuilder.group({
      event_type: ['', Validators.compose([Validators.required])],
    });
  }

}
