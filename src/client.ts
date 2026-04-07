import { HttpClient } from './utils/request';

const TIKFLY_BASE_URL = 'https://tiktok-api23.p.rapidapi.com'

export class TikflyClient {
  private http: HttpClient;

  constructor(apiKey: string) {
    this.http = new HttpClient(TIKFLY_BASE_URL, apiKey);
  }

  get<T>(url: string, params?: Record<string, any>) {
    return this.http.request<T>(url, {
      method: 'GET',
      params
    });
  }
}
