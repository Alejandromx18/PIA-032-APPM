import { TestBed } from '@angular/core/testing';

import { FcfmserviceService } from './fcfmservice.service';

describe('FcfmserviceService', () => {
  let service: FcfmserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FcfmserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
