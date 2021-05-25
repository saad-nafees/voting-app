import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/app.service';
import { CityAService } from './../city-a.service';

@Component({
  selector: 'app-cityA-result',
  templateUrl: './cityA-result.component.html',
  styleUrls: ['./cityA-result.component.css'],
})
export class CityAResultComponent implements OnInit {
  cityResult = [];
  positions = [];
  constructor(private cityData: CityAService, private appData: AppDataService) {
    this.cityResult = cityData.result;
    this.positions = appData.positions.city;
  }

  ngOnInit() {}
}
