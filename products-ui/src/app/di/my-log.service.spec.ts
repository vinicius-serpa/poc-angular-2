import { TestBed, inject } from '@angular/core/testing';

import { MyLogService } from './my-log.service';

describe('MyLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyLogService]
    });
  });

  it('should be created', inject([MyLogService], (service: MyLogService) => {
    expect(service).toBeTruthy();
  }));
});
