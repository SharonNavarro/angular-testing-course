import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TagInterface } from '../types/tag.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public _httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:3004';

  public getTags(): Observable<TagInterface[]> {
    return this._httpClient.get<TagInterface[]>(`${this.apiUrl}/tags`);
  }

  public createTag(name: string): Observable<TagInterface> {
    return this._httpClient.post<TagInterface>(`${this.apiUrl}/tags`, { name });
  }
}
