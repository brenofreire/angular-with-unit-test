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

  constructor(
    @Inject(HttpRequestService) private httpRequester: HttpRequestUsecase,
    private dataAuthorsService: DataAuthorsService
  ) {}

  async searchAuthor(params: AuthorsApiRequest): Promise<AuthorsApiResponse> {
    try {
      const searchAuthorPrefix = '?q=';
      const queryString = this.queryMaker(
        searchAuthorPrefix,
        params.authorName
      );

      return await this.httpRequester.get(queryString);
    } catch (error) {
      throw error;
    }
  }

  async worksByAnAuthor(url: string): Promise<void> {
    try {
      const authorsList = await this.httpRequester.get(url);
      this.dataAuthorsService.spreadAuthorsWork(authorsList);
    } catch (error) {
      throw error;
    }
  }

  queryMaker(prefix, value): string {
    return `${this.authorServiceUrl}${prefix}${value}`;
  }

  get getAuthorServiceUrl() {
    return this.authorServiceUrl;
  }
}
