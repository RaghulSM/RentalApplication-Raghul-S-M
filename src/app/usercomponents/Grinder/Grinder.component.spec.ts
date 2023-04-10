/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrinderComponent } from './Grinder.component';

describe('GrinderComponent', () => {
  let component: GrinderComponent;
  let fixture: ComponentFixture<GrinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
