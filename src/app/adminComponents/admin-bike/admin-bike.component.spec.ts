import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBikeComponent } from './admin-bike.component';

describe('AdminBikeComponent', () => {
  let component: AdminBikeComponent;
  let fixture: ComponentFixture<AdminBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
