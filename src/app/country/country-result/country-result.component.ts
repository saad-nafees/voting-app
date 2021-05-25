import { AppDataService } from './../../app.service';
import { CountryDataService } from './../country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-result',
  templateUrl: './country-result.component.html',
  styleUrls: ['./country-result.component.css'],
})
export class CountryResultComponent implements OnInit {
  countryResult = [];
  cityResult = [];
  positions = { city: [], country: [] };
  constructor(
    private countryData: CountryDataService,
    private appData: AppDataService
  ) {
    this.countryResult = countryData.resultCountry;
    this.cityResult = countryData.resultCity;
    this.positions.country = appData.positions.country;
    this.positions.city = appData.positions.city;
  }

  ngOnInit() {
    console.log(this.countryData);
  }

  // filterByPosition(position) {
  //   if (this.countryPostionsResult.length > 0) {
  //     return this.countryPostionsResult.filter((c) => c.position === position);
  //   } else {
  //     return [];
  //   }
  // }
}
