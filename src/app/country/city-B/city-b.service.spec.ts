/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CityBService } from './city-b.service';

describe('Service: CityB', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityBService]
    });
  });

  it('should ...', inject([CityBService], (service: CityBService) => {
    expect(service).toBeTruthy();
  }));
});
