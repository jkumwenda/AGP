import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormatService } from '../../../../shared/services/format.service';
import { Format } from '../../../../shared/interfaces/format';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-format',
  templateUrl: './edit-format.component.html',
  styleUrls: ['./edit-format.component.css']
})
export class EditFormatComponent implements OnInit {
  moduleTitle = 'Edit Format';
  public formatForm: FormGroup;
  private formatData: any;
  public formatId: any;
  public format: Format;

  constructor(
    private formBuilder: FormBuilder,
    private formatService: FormatService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.formatId = activatedRoute.snapshot.params['id'];
    this.initializeFormatForm();
  }

  getFormat(formatId) {
    this.formatService.getFormat(formatId).then((result) => {
      this.format = result as Format;
      this.initializeFormatForm();
    }, (error) => {
    });
  }

  editFormat() {
    const data  = this.formatForm.value;
    this.formatData = {
      format: data.format,
    };

    this.formatService.editFormat(this.formatId, this.formatData).then((result) => {
      this.router.navigate(['/manage/formats/']);
    }, (error) => {
      console.log(error);
    });
  }

  initializeFormatForm() {
    if (this.format == null) {
      this.format = new Format();
      this.format.format = null;
    }
    this.formatForm = this.formBuilder.group({
      format: [this.format.format, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.getFormat(this.formatId);
  }

}


