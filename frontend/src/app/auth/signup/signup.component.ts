import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/shared/services/signup.service';
import { GenderService } from 'src/app/shared/services/gender.service';
import { Gender } from 'src/app/shared/interfaces/gender';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public moduleTitle = 'Sign Up';
  public genders: Gender[];
  public signupForm: FormGroup;
  private userData: any;
  submitted = false;

  constructor(
    private signupService: SignupService,
    private genderService: GenderService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  signup() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

    const data = this.signupForm.value;
    this.userData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      username: data.username,
      password: data.password,
      userprofile: { fk_genderid: data.gender, phone: data.phone },
    };

    this.signupService.signup(this.userData).then((result => {
      this.router.navigate(['signup-confirmation']);
    }),
      (error) => {
      }
    );
  }

  getGenders() {
    this.genderService.getGendersNoAuth().then((result) => {
      this.genders = result as Gender[];
    }, (error) => {
    });
  }

  ngOnInit() {
    this.getGenders();

    this.signupForm = this.formBuilder.group({
      gender: ['', Validators.compose([Validators.required])],
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }
  get validatorCheck() {
    return this.signupForm.controls;
  }
}
