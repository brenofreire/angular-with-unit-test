import { TestBed } from '@angular/core/testing';
import { mockDataAuthorsService } from '../authors/authors.service.spec';
import { DataAuthorsService } from './data-authors.service';

describe('Test DataAuthorService', () => {
  let service: DataAuthorsService = mockDataAuthorsService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DataAuthorsService,
          useValue: service,
        },
      ],
    }).compileComponents();

    service = TestBed.inject(DataAuthorsService);
  });

  it('Should spread data', (resolve) => {
    service.getAuthorsWork$().subscribe((key) => {
      expect(key).toBeDefined();
    });

    service.spreadAuthorsWork({ key: 'test' });
    resolve();
  });
});
