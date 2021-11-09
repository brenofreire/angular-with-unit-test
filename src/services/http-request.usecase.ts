export interface HttpRequestUsecase {
  get(url: string): Promise<any>;
  post(url: string, body): Promise<any>;
  put(url: string, body): Promise<any>;
  delete(url: string, body): Promise<any>;
}
