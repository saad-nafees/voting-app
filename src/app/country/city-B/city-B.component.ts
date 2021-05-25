import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from './../../app.service';
import { CountryDataService } from './../country.service';
import { CityBService } from './city-b.service';

@Component({
  selector: 'app-city-B',
  templateUrl: './city-B.component.html',
  styleUrls: ['./city-B.component.css'],
})
export class CityBComponent implements OnInit {
  candidateData = [];
  positionData: any;
  position: string;
  constructor(
    private router: Router,
    private cityData: CityBService,
    private countryData: CountryDataService,
    private appData: AppDataService
  ) {
    this.positionData = appData.positions.city;
    this.position = appData.positions.city[0].name;
  }

  async ngOnInit() {
    await this.appData.candidates.map(async (can) => {
      let cond = true;

      if (
        can.city === 'CityB' &&
        can.cityPosition &&
        can.cityPosition !== 'N/A'
      ) {
        await this.cityData.result.map((cand) => {
          console.log(cand);
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
          this.countryData.resultCity.push({
            city: 'CityB',
            result: this.cityData.result,
          });
        }
      }
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
        x.city === 'CityB';
      })
    ] = this.cityData.result;
  }

  stopVoting() {
    this.router.navigate(['/country/cityB/result']);
  }
}
