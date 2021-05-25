import { CountryDataService } from './country.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../app.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  candidateData = [];
  positionData: any;
  position: string;
  constructor(
    private router: Router,
    private countryData: CountryDataService,
    private appData: AppDataService
  ) {
    this.positionData = appData.positions.country;
    this.position = appData.positions.country[0].name;
  }

  async ngOnInit() {
    await this.appData.candidates.map(async (can) => {
      let cond = true;

      if (can.countryPosition && can.countryPosition !== 'N/A') {
        await this.countryData.resultCountry.map((cand) => {
          if (cand.name === can.name) {
            cond = false;
          }
        });

        if (cond) {
          this.countryData.resultCountry.push({
            name: can.name,
            city: can.city,
            position: can.countryPosition,
            votes: 0,
          });
        }
      }
    });
    this.candidateData = this.countryData.resultCountry;
    console.log(this.candidateData);
  }

  get filterByPosition() {
    if (this.candidateData.length > 0) {
      return this.candidateData.filter((c) => c.position === this.position);
    } else {
      return [];
    }
  }

  poll(name, position) {
    this.countryData.resultCountry[
      this.countryData.resultCountry.findIndex(
        (x) => x.name === name && x.position === position
      )
    ].votes += 1;
  }

  stopVoting() {
    this.router.navigate(['/country/result']);
  }
}
