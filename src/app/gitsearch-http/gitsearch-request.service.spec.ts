import { TestBed } from '@angular/core/testing';

import { HttpRequestService } from './gitsearch-request.service';

describe('GitsearchRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpRequestService = TestBed.get(HttpRequestService);
    expect(service).toBeTruthy();
  });
});
