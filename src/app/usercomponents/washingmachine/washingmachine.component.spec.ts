/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WashingmachineComponent } from './washingmachine.component';

describe('WashingmachineComponent', () => {
  let component: WashingmachineComponent;
  let fixture: ComponentFixture<WashingmachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashingmachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
