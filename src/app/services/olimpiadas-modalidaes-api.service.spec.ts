import { TestBed } from '@angular/core/testing';

import { OlimpiadasModalidaesApiService } from './olimpiadas-modalidaes-api.service';

describe('OlimpiadasModalidaesApiService', () => {
  let service: OlimpiadasModalidaesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlimpiadasModalidaesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
