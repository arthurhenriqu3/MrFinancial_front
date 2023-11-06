import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BookEntry } from '../models/book-entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookEntryService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}book-entry`;

  constructor(private http:HttpClient) { }

  public create(bookEntry: BookEntry): Observable<BookEntry> {
    return this.http.post<BookEntry>(this.apiUrl, bookEntry);
  }

  public findAll(): Observable<BookEntry[]>{
    return this.http.get<BookEntry[]>(this.apiUrl);
  }
}
