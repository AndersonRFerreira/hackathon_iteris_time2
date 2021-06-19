import { TestBed } from '@angular/core/testing';

import { OlimpiadasMedalhaApiService } from './olimpiadas-medalha-api.service';

describe('OlimpiadasMedalhaApiService', () => {
  let service: OlimpiadasMedalhaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlimpiadasMedalhaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
