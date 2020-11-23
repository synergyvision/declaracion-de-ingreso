import { TestBed } from '@angular/core/testing';

import { AutoSignOutGuard } from './auto-sign-out.guard';

describe('AutoSignOutGuard', () => {
  let guard: AutoSignOutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutoSignOutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
