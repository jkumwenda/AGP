import { Component, OnInit } from "@angular/core";
import { CountryService } from "src/app/shared/services/country.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Country } from "src/app/shared/interfaces/country";

@Component({
  selector: "app-edit-country",
  templateUrl: "./edit-country.component.html",
  styleUrls: ["./edit-country.component.css"]
})
export class EditCountryComponent implements OnInit {
  public moduleTitle: string = "Edit Country";
  public countryForm: FormGroup;
  public countryId: any;
  public country: Country;
  public countryData: any;

  constructor(
    private countryService: CountryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.countryId = activatedRoute.snapshot.params["id"];
    this.initializeCountryForm();
  }
  initializeCountryForm() {
    if (this.country == null) {
      this.country = new Country(null,null);
    }

    this.countryForm = this.formBuilder.group({
      country: [this.country.country, Validators.compose([Validators.required])]
    });
  }

  getCountry(countryId) {
    this.countryService.getCountry(countryId).then(
      (result: Country) => {
        this.country = result;
        this.initializeCountryForm();
      },
      error => console.log(error)
    );
  }

  editCountry() {
    const data = this.countryForm.value;
    this.countryData = {
      country: data.country
    };

    this.countryService.editCountry(this.countryId, this.countryData).then(
      result => {
        this.router.navigate(["/manage/countries/"]);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getCountry(this.countryId);
  }
}
