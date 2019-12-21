import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DrawTypeService } from '../../../../shared/services/draw-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-draw-type',
  templateUrl: './add-draw-type.component.html',
  styleUrls: ['./add-draw-type.component.css']
})
export class AddDrawTypeComponent implements OnInit {
  moduleTitle = 'Add Draw Type';
  public drawTypeForm: FormGroup;
  private drawTypeData: any;

  constructor(
    private formBuilder: FormBuilder,
    private drawTypeService: DrawTypeService,
    private router: Router
  ) { }

  addDrawType() {
    const data  = this.drawTypeForm.value;
    this.drawTypeData = {
       draw_type: data.draw_type
    };

    this.drawTypeService.addDrawType(this.drawTypeData).then((result) => {
      this.router.navigate(['/manage/draw-types']);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.drawTypeForm = this.formBuilder.group({
      draw_type: ['', Validators.compose([Validators.required])],
    });
  }

}
