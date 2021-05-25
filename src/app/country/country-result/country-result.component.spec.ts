/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountryResultComponent } from './country-result.component';

describe('CountryResultComponent', () => {
  let component: CountryResultComponent;
  let fixture: ComponentFixture<CountryResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
