import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/app.service';
import { CityBService } from './../city-b.service';

@Component({
  selector: 'app-cityB-result',
  templateUrl: './cityB-result.component.html',
  styleUrls: ['./cityB-result.component.css'],
})
export class CityBResultComponent implements OnInit {
  cityResult = [];
  positions = [];
  constructor(private cityData: CityBService, private appData: AppDataService) {
    this.cityResult = cityData.result;
    this.positions = appData.positions.city;
  }

  ngOnInit() {}
}
