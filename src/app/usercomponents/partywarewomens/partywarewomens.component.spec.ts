/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PartywarewomensComponent } from './partywarewomens.component';

describe('PartywarewomensComponent', () => {
  let component: PartywarewomensComponent;
  let fixture: ComponentFixture<PartywarewomensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartywarewomensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartywarewomensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
