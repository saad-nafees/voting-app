import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  candidates = [
    {
      name: 'Jack Mack',
      city: 'CityA',
      countryPosition: 'President',
      cityPosition: 'Magistrate',
      edit: false,
    },
    {
      name: 'Steve Rogers',
      city: 'CityB',
      countryPosition: 'Vice President',
      cityPosition: 'Mayor',
      edit: false,
    },
    {
      name: 'James Arthur',
      city: 'CityC',
      countryPosition: 'President',
      cityPosition: 'Mayor',
      edit: false,
    },
  ];

  positions = {
    city: [
      { name: 'Mayor', status: 'open', edit: false },
      { name: 'Magistrate', status: 'open', edit: false },
    ],
    country: [
      { name: 'President', status: 'open', edit: false },
      { name: 'Vice President', status: 'open', edit: false },
    ],
  };

  cities = ['CityA', 'CityB', 'CityC'];
}
