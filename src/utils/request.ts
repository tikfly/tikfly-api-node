import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  data?: any;
  params?: Record<string, any>;
}

export class HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string, apiKey?: string) {
    if (!apiKey || apiKey.trim() === '') {
      throw new Error('API KEY is required. Please provide your API KEY when initializing the client.');
    }

    this.instance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': apiKey,
      },
    });

    this.instance.interceptors.request.use((config) => {
      return config;
    });

    this.instance.interceptors.response.use(
      (res) => res,
      (error) => {
        const status = error.response?.status;
        const message =
          error.response?.data?.message || error.message || 'Unknown error';

        return Promise.reject(
          new Error(`Tikfly API error (${status}): ${message}`)
        );
      }
    );
  }

  async request<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const config: AxiosRequestConfig = {
      url,
      method: options.method || 'GET',
      headers: options.headers,
      data: options.data,
      params: options.params,
    };

    const res = await this.instance.request<T>(config);
    return res.data;
  }
}
