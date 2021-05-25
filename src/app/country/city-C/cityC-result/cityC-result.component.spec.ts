/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityCResultComponent } from './cityC-result.component';

describe('CityCResultComponent', () => {
  let component: CityCResultComponent;
  let fixture: ComponentFixture<CityCResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityCResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
