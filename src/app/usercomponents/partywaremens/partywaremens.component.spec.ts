/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PartywaremensComponent } from './partywaremens.component';

describe('PartywaremensComponent', () => {
  let component: PartywaremensComponent;
  let fixture: ComponentFixture<PartywaremensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartywaremensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartywaremensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
