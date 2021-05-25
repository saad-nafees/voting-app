/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityBResultComponent } from './cityB-result.component';

describe('CityBResultComponent', () => {
  let component: CityBResultComponent;
  let fixture: ComponentFixture<CityBResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityBResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityBResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
