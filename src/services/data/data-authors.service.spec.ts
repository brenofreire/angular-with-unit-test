import { TestBed } from '@angular/core/testing';
import { DataAuthorsService } from './data-authors.service';

describe('Test DataAuthorService', () => {
  let service: DataAuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(DataAuthorsService);
  });

  it('Should spread data', (resolve) => {
    service.getAuthorsList$().subscribe(({ key }) => {
      expect(key).toBe('test');

      resolve();
    });

    service.spreadAuthorsWork({ key: 'test' });
  });
});
