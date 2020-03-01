import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/shared/services/country.service';
import { Router } from '@angular/router';
import { Country } from 'src/app/shared/interfaces/country';
import {PermissionCheckService} from '../../../shared/services/permission-check.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public moduleTitle = 'Countries';
  public countries: Country[];
  public permissionCodes = ['addCountry', 'viewCountry', 'editCountry', 'deleteCountry'];
  public profilePermissions: string[] = [];
  public loggedProfile = 2;

  constructor(
    private countryService: CountryService,
    private router: Router,
    private permissionCheckService: PermissionCheckService,
  ) {}


  checkIfEmpty() {
    return Array.isArray(this.countries) && this.countries.length;
  }

  getCountries() {
    this.countryService.getCountries().then(
      (result: Country[]) => this.countries = result,
       error => console.log(error)
    );
  }

  deleteCountry(countryId) {
    this.countryService.deleteCountry(countryId).then(
      result => {
        this.router.navigate(['manage/countries']);
        this.getCountries();
      },
      error => console.log(error)
    );
  }

  editCountry(countryId) {
    this.router.navigate(['manage/edit-country', countryId]);

  }
  checkPermissions() {
    this.permissionCheckService.permissionCheck(this.loggedProfile, this.permissionCodes).then(
      (result: string[]) => this.profilePermissions = result,
      (error) => console.log(error)
    );
  }

  checkIfPermitted(code) {
    return this.profilePermissions.find(item => item === code);
  }

  ngOnInit() {
    this.getCountries();
    this.checkPermissions();
  }
}
