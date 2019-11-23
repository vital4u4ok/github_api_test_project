import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  apiUrl = 'https://api.github.com';

  constructor(
      private http: HttpClient
  ) {}

  setHeaders(headerType = 'json'): any {
    const headersConf = {};
    if (headerType === 'json') {
        headersConf['Content-Type'] = 'application/json';
    }

    return new HttpHeaders(headersConf);
  }

  getRepositories(): Observable<any> {
    const headers = this.setHeaders();
    return this.http.get(`${this.apiUrl}/repositories`, { headers });
  }

  getRepositoryById(id: number): Observable<any> {
    const headers = this.setHeaders();
    return this.http.get(`${this.apiUrl}/repositories/${id}`, { headers });
  }

  getCommitsByRepositoryId(id: number): Observable<any> {
    const headers = this.setHeaders();
    return this.http.get(`${this.apiUrl}/repositories/${id}/commits`, { headers });
  }
}
