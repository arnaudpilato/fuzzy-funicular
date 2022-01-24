import { TestBed } from '@angular/core/testing';

import { ApiWilderService } from './api-wilder.service';

describe('ApiWilderService', () => {
  let service: ApiWilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiWilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
