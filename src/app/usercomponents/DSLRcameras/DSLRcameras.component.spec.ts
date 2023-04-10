/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DSLRcamerasComponent } from './DSLRcameras.component';

describe('DSLRcamerasComponent', () => {
  let component: DSLRcamerasComponent;
  let fixture: ComponentFixture<DSLRcamerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSLRcamerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSLRcamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
