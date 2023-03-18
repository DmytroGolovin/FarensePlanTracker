import { TestBed } from '@angular/core/testing';

import { UserBarService } from './user-bar.service';

describe('UserBarService', () => {
  let service: UserBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
