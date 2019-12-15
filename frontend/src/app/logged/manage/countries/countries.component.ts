import { Component, OnInit } from "@angular/core";
import { CountryService } from "src/app/shared/services/country.service";
import { Router } from "@angular/router";
import { Country } from 'src/app/shared/interfaces/country';
import { DataTablesModule } from 'angular-datatables';


@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"]
})
export class CountriesComponent implements OnInit {
  public moduleTitle: string = "Countries";
  public countries: Country[]

  constructor(private countryService: CountryService, private router: Router) {}


  checkIfEmpty(){
    return Array.isArray(this.countries) && this.countries.length
  }

  getCountries(){
    this.countryService.getCountrys().then(
      (result:Country[])=>this.countries=result,
       error=>console.log(error)
    )
  }

  deleteCountry(countryId){
    this.countryService.deleteCountry(countryId).then(
      result=> {
        this.router.navigate(['manage/countries'])
        this.getCountries()
      },
      error=>console.log(error)
    )
  }

  editCountry(countryId){
    this.router.navigate(['manage/edit-country',countryId])

  }
  ngOnInit() {
    this.getCountries()
  }
}
