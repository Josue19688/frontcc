import { TestBed } from '@angular/core/testing';

import { WesocketsService } from './wesockets.service';

describe('WesocketsService', () => {
  let service: WesocketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WesocketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
