import { TestBed } from '@angular/core/testing';
import { AuthorsService } from './authors.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpRequestUsecase } from '../http-request.usecase';
import { HttpRequestService } from '../http-request.service';
import { DataAuthorsService } from '../data/data-authors.service';
import { of } from 'rxjs';
import { AuthorsApiRequest } from './authors-api.interface';

const mockHttpRequester = () => {
  const methods = jasmine.createSpyObj(['get', 'post', 'put', 'delete']);

  methods.get.and.returnValue(Promise.resolve(true));
  methods.post.and.returnValue(Promise.resolve(true));
  methods.put.and.returnValue(Promise.resolve(true));
  methods.delete.and.returnValue(Promise.resolve(true));

  return methods;
};
export const mockDataAuthorsService = () => {
  const methods = jasmine.createSpyObj([
    'spreadAuthorsWork',
    'getAuthorsWork$',
  ]);

  methods.spreadAuthorsWork.and.returnValue();
  methods.getAuthorsWork$.and.returnValue(of([]));

  return methods;
};

describe('Test DataAuthorService', () => {
  let service: AuthorsService;
  let httpRequester: HttpRequestUsecase = mockHttpRequester();
  let dataAuthorsService: DataAuthorsService = mockDataAuthorsService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HttpRequestService,
          useValue: httpRequester,
        },
        {
          provide: DataAuthorsService,
          useValue: dataAuthorsService,
        },
      ],
    });

    service = TestBed.inject(AuthorsService);
    httpRequester = TestBed.inject(HttpRequestService);
    dataAuthorsService = TestBed.inject(DataAuthorsService);
  });

  it('Should create query string custom', () => {
    const [url, prefix, value] = ['test', 'q=', 'something'];
    const queryString = service.queryMaker(url, prefix, value);

    expect(queryString).toEqual(url + prefix + value);
  });

  it('Should get works by author', (resolve) => {
    const param = 'test';
    service.worksByAnAuthor(param).then(() => {
      expect(httpRequester.get).toHaveBeenCalled();
      expect(dataAuthorsService.spreadAuthorsWork).toHaveBeenCalledWith(true);

      resolve();
    });
  });

  it('Should search author', (resolve) => {
    spyOn(service, 'queryMaker');
    const param: AuthorsApiRequest = {
      authorName: 'Paulo Coelho',
      bookName: 'The Alchemist',
    };

    service.searchAuthor(param).then(() => {
      const queryMakerParams = ['url', '?q=', param.authorName];
      expect(service.queryMaker).toHaveBeenCalled();
      const queryString = service.queryMaker(
        queryMakerParams[0],
        queryMakerParams[1],
        queryMakerParams[2]
      );
      expect(httpRequester.get).toHaveBeenCalledWith(queryString);

      resolve();
    });
  });
});
