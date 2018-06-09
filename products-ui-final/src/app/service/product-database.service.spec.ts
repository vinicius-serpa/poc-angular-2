import { TestBed, inject } from '@angular/core/testing';

import { ProductDatabaseService } from './product-database.service';

describe('ProductDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDatabaseService]
    });
  });

  it('should be created', inject([ProductDatabaseService], (service: ProductDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
