import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  searchGifs(query: string, offset: number = 0, limit: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', limit.toString())
      .set('offset', offset.toString()); 

    return this.http.get(this.apiUrl, { params });
  }
}