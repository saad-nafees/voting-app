/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CityAService } from './city-a.service';

describe('Service: CityA', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityAService],
    });
  });

  it('should ...', inject([CityAService], (service: CityAService) => {
    expect(service).toBeTruthy();
  }));
});
