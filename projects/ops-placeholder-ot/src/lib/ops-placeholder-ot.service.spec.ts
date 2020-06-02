import { TestBed } from '@angular/core/testing';

import { OpsPlaceholderOtService } from './ops-placeholder-ot.service';

describe('OpsPlaceholderOtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpsPlaceholderOtService = TestBed.get(OpsPlaceholderOtService);
    expect(service).toBeTruthy();
  });
});
