import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequestUsecase } from './http-request.usecase';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService implements HttpRequestUsecase {
  constructor(private httpClient: HttpClient) {}

  get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe({
        next: (result) => {
          resolve(result);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }

  post(url: string, body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(url, body).subscribe({
        next: (result) => {
          resolve(result);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }

  put(url: string, body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(url, body).subscribe({
        next: (result) => {
          resolve(result);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }

  delete(url: string, body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(url, body).subscribe({
        next: (result) => {
          resolve(result);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }
}
