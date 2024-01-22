import { TestBed } from '@angular/core/testing';

import { ChessmenService } from './chessmen.service';

describe('ChessmenService', () => {
  let service: ChessmenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessmenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
