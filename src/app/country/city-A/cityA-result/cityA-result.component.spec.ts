/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityAResultComponent } from './cityA-result.component';

describe('CityAResultComponent', () => {
  let component: CityAResultComponent;
  let fixture: ComponentFixture<CityAResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityAResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityAResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
