import { TestBed, inject } from '@angular/core/testing';

import { NameTechService } from './name-tech.service';

describe('NameTechService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameTechService]
    });
  });

  it('should be created', inject([NameTechService], (service: NameTechService) => {
    expect(service).toBeTruthy();
  }));
});
