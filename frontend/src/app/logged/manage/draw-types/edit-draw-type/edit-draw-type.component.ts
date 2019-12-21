import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DrawTypeService } from '../../../../shared/services/draw-type.service';
import { DrawType } from '../../../../shared/interfaces/draw-type';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-draw-type',
  templateUrl: './edit-draw-type.component.html',
  styleUrls: ['./edit-draw-type.component.css']
})
export class EditDrawTypeComponent implements OnInit {
  moduleTitle = 'Edit Draw TYpe';
  public drawTypeForm: FormGroup;
  private drawTypeData: any;
  public drawTypeId: any;
  public drawType: DrawType;

  constructor(
    private formBuilder: FormBuilder,
    private drawTypeService: DrawTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.drawTypeId = activatedRoute.snapshot.params['id'];
    this.initializeDrawTypeForm();
  }

  getDrawType(drawTypeId) {
    this.drawTypeService.getDrawType(drawTypeId).then((result) => {
      this.drawType = result as DrawType;
      this.initializeDrawTypeForm();
    }, (error) => {
    });
  }

  editDrawType() {
    const data  = this.drawTypeForm.value;
    this.drawTypeData = {
      draw_type: data.draw_type,
    };

    this.drawTypeService.editDrawType(this.drawTypeId, this.drawTypeData).then((result) => {
      this.router.navigate(['/manage/draw-types/']);
    }, (error) => {
      console.log(error);
    });
  }

  initializeDrawTypeForm() {
    if (this.drawType == null) {
      this.drawType = new DrawType();
      this.drawType.draw_type = null;
    }
    this.drawTypeForm = this.formBuilder.group({
      draw_type: [this.drawType.draw_type, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.getDrawType(this.drawTypeId);
  }

}


