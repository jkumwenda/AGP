import { Component, OnInit } from "@angular/core";
import { CountryService } from "src/app/shared/services/country.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-country",
  templateUrl: "./add-country.component.html",
  styleUrls: ["./add-country.component.css"]
})
export class AddCountryComponent implements OnInit {
  public moduleTitle: string = "Add Country";
  public countryForm: FormGroup;
  private countryData: any;

  addCountry() {
    const data = this.countryForm.value;
    this.countryData = {
      country: data.country
    };

    this.countryService.addCountry(this.countryData).then(
      result=> this.router.navigate(['manage/countries']),
      error=> console.log(error)
    )
  }

  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.countryForm = this.formBuilder.group({
      country: ["", Validators.compose([Validators.required])]
    });
  }
}
