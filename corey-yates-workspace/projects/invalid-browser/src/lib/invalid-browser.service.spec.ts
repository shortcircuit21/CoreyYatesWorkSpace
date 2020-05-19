import { TestBed } from '@angular/core/testing';

import { InvalidBrowserService } from './invalid-browser.service';

describe('InvalidBrowserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvalidBrowserService = TestBed.get(InvalidBrowserService);
    expect(service).toBeTruthy();
  });
});
