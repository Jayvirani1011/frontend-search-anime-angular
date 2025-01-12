import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IData, IPagination } from './search-anime.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private _http: HttpClient) { }

  getData$(pagination: IPagination): Observable<IData> {
    const { currentPage, limit, searchValue } = pagination;

    const queryParams: Record<string, string | number> = {
      page: currentPage,
      limit: limit,
      order_by: 'favorites',
      sort: 'desc'
    };
    if (searchValue) {
      queryParams['q'] = searchValue;
    }
    const url = `${environment.apiUrl}?${this.buildQueryString(queryParams)}`;
    return this._http.get<IData>(url);
  }

  private buildQueryString(params: { [key: string]: any }): string {
    return Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  }
}
