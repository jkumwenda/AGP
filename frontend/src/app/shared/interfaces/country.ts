export class Country {
         pk_countryid: number;
         country: string;
         code: string;

         constructor(countryId: number, country: string, code: string) {
           this.country = country;
           this.code = code;
           this.pk_countryid = countryId;
         }
       }
