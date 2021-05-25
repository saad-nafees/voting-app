import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from './../../app.service';
import { CountryDataService } from './../country.service';
import { CityAService } from './city-a.service';

@Component({
  selector: 'app-city-A',
  templateUrl: './city-A.component.html',
  styleUrls: ['./city-A.component.css'],
})
export class CityAComponent implements OnInit {
  candidateData = [];
  positionData: any;
  position: string;
  constructor(
    private router: Router,
    private cityData: CityAService,
    private countryData: CountryDataService,
    private appData: AppDataService
  ) {
    this.positionData = appData.positions.city;
    this.position = appData.positions.city[0].name;
  }

  async ngOnInit() {
    console.log(this.countryData);
    await this.appData.candidates.map(async (can) => {
      let cond = true;
      if (
        can.city === 'CityA' &&
        can.cityPosition &&
        can.cityPosition !== 'N/A'
      ) {
        await this.cityData.result.map((cand) => {
          if (cand.name === can.name) {
            cond = false;
          }
        });
        if (cond) {
          this.cityData.result.push({
            name: can.name,
            city: can.city,
            position: can.cityPosition,
            votes: 0,
          });
        }
      }
    });
    this.countryData.resultCity.push({
      city: 'CityA',
      result: this.cityData.result,
    });
    this.candidateData = this.cityData.result;
  }

  get filterByPosition() {
    if (this.candidateData.length > 0) {
      return this.candidateData.filter((c) => c.position === this.position);
    } else {
      return [];
    }
  }

  poll(name, position) {
    this.cityData.result[
      this.cityData.result.findIndex(
        (x) => x.name === name && x.position === position
      )
    ].votes += 1;
    this.countryData.resultCity[
      this.countryData.resultCity.findIndex((x) => {
        x.city === 'CityA';
      })
    ] = this.cityData.result;
  }

  stopVoting() {
    this.router.navigate(['/country/cityA/result']);
  }
}
