import { Inject, Injectable } from '@angular/core';
import { AuthorsApiRequest, AuthorsApiResponse } from './authors-api.interface';
import { HttpRequestService } from '../http-request.service';
import { HttpRequestUsecase } from '../http-request.usecase';
import { DataAuthorsService } from '../data/data-authors.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private readonly authorServiceUrl =
    'https://openlibrary.org/search/authors.json';
  private readonly worksByAnAuthorUrl = `https://openlibrary.org/authors/`;

  constructor(
    @Inject(HttpRequestService) private httpRequester: HttpRequestUsecase,
    private dataAuthorsService: DataAuthorsService
  ) {}

  async searchAuthor(params: AuthorsApiRequest): Promise<AuthorsApiResponse> {
    try {
      const searchAuthorPrefix = '?q=';
      const queryString = this.queryMaker(
        this.authorServiceUrl,
        searchAuthorPrefix,
        params.authorName
      );

      return await this.httpRequester.get(queryString);
    } catch (error) {
      throw error;
    }
  }

  async worksByAnAuthor(hash: string): Promise<void> {
    try {
      const suffixUrl = '/works.json';
      const url = this.queryMaker(this.worksByAnAuthorUrl, hash, suffixUrl);

      const workList = await this.httpRequester.get(url);
      this.dataAuthorsService.spreadAuthorsWork(workList);
    } catch (error) {
      throw error;
    }
  }

  queryMaker(urlBase, prefix, value): string {
    return `${urlBase}${prefix}${value}`;
  }

  get getAuthorServiceUrl() {
    return this.authorServiceUrl;
  }
}
