export class Country {
  pk_countryid: number;
  country: string;

  constructor(countryId: number, country: string) {
    this.country = country;
    this.pk_countryid = countryId;
  }
}
