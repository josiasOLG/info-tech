import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { HttpRequestOptions, HttpMethod } from './http.types';
import { LoadingService } from '../services';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CustomHttpClient {
  private readonly http = inject(HttpClient);
  private readonly loadingService = inject(LoadingService);
  private readonly apiBaseUrl = environment.apiUrl;

  async request<T = any>(
    method: HttpMethod,
    url: string,
    options: HttpRequestOptions<T> = {}
  ): Promise<T> {
    const fullUrl = this.resolveUrl(url);
    const headers = new HttpHeaders(options.headers || {});
    const params = new HttpParams({ fromObject: options.params || {} });

    const useLoading = options.disableLoading !== true;
    if (useLoading) this.loadingService.show();

    try {
      const response$ = this.http.request<T>(method, fullUrl, {
        body: options.body,
        headers,
        params,
        responseType: options.responseType ?? 'json',
        observe: options.observe ?? 'body',
      });

      const response = await firstValueFrom(response$);

      return response;
    } catch (err) {
      console.error(`[HTTP][${method}]`, fullUrl, err);
      throw err;
    } finally {
      if (useLoading) this.loadingService.hide();
    }
  }

  get<T>(url: string, options?: HttpRequestOptions<T>) {
    return this.request<T>('GET', url, options);
  }

  post<T>(url: string, body: any, options?: HttpRequestOptions<T>) {
    return this.request<T>('POST', url, { ...options, body });
  }

  put<T>(url: string, body: any, options?: HttpRequestOptions<T>) {
    return this.request<T>('PUT', url, { ...options, body });
  }

  patch<T>(url: string, body: any, options?: HttpRequestOptions<T>) {
    return this.request<T>('PATCH', url, { ...options, body });
  }

  delete<T>(url: string, options?: HttpRequestOptions<T>) {
    return this.request<T>('DELETE', url, options);
  }

  createDomainClient(domain: string) {
    const prefix = `/${domain}`;
    return {
      get: <T>(path: string, options?: HttpRequestOptions<T>) =>
        this.get<T>(`${prefix}${path}`, options),
      post: <T>(path: string, body: any, options?: HttpRequestOptions<T>) =>
        this.post<T>(`${prefix}${path}`, body, options),
      put: <T>(path: string, body: any, options?: HttpRequestOptions<T>) =>
        this.put<T>(`${prefix}${path}`, body, options),
      patch: <T>(path: string, body: any, options?: HttpRequestOptions<T>) =>
        this.patch<T>(`${prefix}${path}`, body, options),
      delete: <T>(path: string, options?: HttpRequestOptions<T>) =>
        this.delete<T>(`${prefix}${path}`, options),
    };
  }

  private resolveUrl(path: string): string {
    if (path.startsWith('http')) return path;
    return `${this.apiBaseUrl}${path}`;
  }
}
