import { TestBed } from '@angular/core/testing';

import { GitsearchRequestService } from './gitsearch-request.service';

describe('GitsearchRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitsearchRequestService = TestBed.get(GitsearchRequestService);
    expect(service).toBeTruthy();
  });
});
