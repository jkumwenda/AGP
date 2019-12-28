import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormatService } from '../../../../shared/services/format.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-format',
  templateUrl: './add-format.component.html',
  styleUrls: ['./add-format.component.css']
})
export class AddFormatComponent implements OnInit {
  moduleTitle = 'Add Format';
  public formatForm: FormGroup;
  private formatData: any;

  constructor(
    private formBuilder: FormBuilder,
    private formatService: FormatService,
    private router: Router
  ) { }

  addFormat() {
    const data  = this.formatForm.value;
    this.formatData = {
       format: data.format
    };

    this.formatService.addFormat(this.formatData).then((result) => {
      this.router.navigate(['/manage/formats']);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.formatForm = this.formBuilder.group({
      format: ['', Validators.compose([Validators.required])],
    });
  }

}
