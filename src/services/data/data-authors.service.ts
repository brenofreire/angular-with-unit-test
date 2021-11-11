import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataAuthorsService {
  private authorsWork = new Subject<any>();

  constructor() {}

  spreadAuthorsWork(authorsWork: {}): void {
    this.authorsWork.next(authorsWork);
  }

  getAuthorsWork$(): Subject<any> {
    return this.authorsWork;
  }
}
