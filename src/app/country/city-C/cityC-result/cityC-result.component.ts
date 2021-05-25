import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/app.service';
import { CityCService } from './../city-c.service';

@Component({
  selector: 'app-cityC-result',
  templateUrl: './cityC-result.component.html',
  styleUrls: ['./cityC-result.component.css'],
})
export class CityCResultComponent implements OnInit {
  cityResult = [];
  positions = [];
  constructor(private cityData: CityCService, private appData: AppDataService) {
    this.cityResult = cityData.result;
    this.positions = appData.positions.city;
  }

  ngOnInit() {}
}
