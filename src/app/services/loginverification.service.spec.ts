import { TestBed } from '@angular/core/testing';

import { LoginverificationService } from './loginverification.service';

describe('LoginverificationService', () => {
  let service: LoginverificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginverificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
