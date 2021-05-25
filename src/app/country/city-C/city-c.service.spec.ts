/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CityCService } from './city-c.service';

describe('Service: CityC', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityCService]
    });
  });

  it('should ...', inject([CityCService], (service: CityCService) => {
    expect(service).toBeTruthy();
  }));
});
