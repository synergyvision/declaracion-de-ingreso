import { TestBed } from '@angular/core/testing';

import { NoProfileGuard } from './no-profile.guard';

describe('NoProfileGuard', () => {
  let guard: NoProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
