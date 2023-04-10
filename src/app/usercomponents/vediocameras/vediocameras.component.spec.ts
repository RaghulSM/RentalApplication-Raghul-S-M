/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VediocamerasComponent } from './vediocameras.component';

describe('VediocamerasComponent', () => {
  let component: VediocamerasComponent;
  let fixture: ComponentFixture<VediocamerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VediocamerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VediocamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
