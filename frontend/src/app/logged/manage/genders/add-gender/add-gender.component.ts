import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenderService } from '../../../../shared/services/gender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-gender',
  templateUrl: './add-gender.component.html',
  styleUrls: ['./add-gender.component.css']
})
export class AddGenderComponent implements OnInit {
  moduleTitle = 'Add Gender';
  public genderForm: FormGroup;
  private genderData: any;

  constructor(
    private formBuilder: FormBuilder,
    private genderService: GenderService,
    private router: Router
  ) { }

  addGender() {
    const data  = this.genderForm.value;
    this.genderData = {
       gender: data.gender
    };

    this.genderService.addGender(this.genderData).then((result) => {
      this.router.navigate(['/manage/genders']);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.genderForm = this.formBuilder.group({
      gender: ['', Validators.compose([Validators.required])],
    });
  }

}
