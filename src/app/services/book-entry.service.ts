import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BookEntry } from '../models/book-entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookEntryService {

  private apiUrl:string;

  constructor(private http:HttpClient) {
    this.apiUrl = environment.API_HOST + 'book-entry';
  }
  public create(bookEntry: BookEntry): Observable<BookEntry> {
    return this.http.post<BookEntry>(this.apiUrl, bookEntry);
  }

  public register(bookEntry: BookEntry): Observable<BookEntry> {
    if(bookEntry.id){
      return this.update(bookEntry);
    }else{
      return this.insert(bookEntry);
    }
  }

  public insert(bookEntry: BookEntry): Observable<BookEntry> {
    return this.http.post<BookEntry>(this.apiUrl, bookEntry);
  }

  public update(bookEntry:BookEntry):Observable<BookEntry>{
    return this.http.put<BookEntry>(this.apiUrl, bookEntry);
  }

  public delete(id:string){
    this.http.delete(this.apiUrl+"/"+id).subscribe();
  }

  public findById(id:string): Observable<BookEntry>{
    return this.http.get<BookEntry>(this.apiUrl + '/' + id);
  }

  public findAll(): Observable<BookEntry[]>{
    return this.http.get<BookEntry[]>(this.apiUrl);
  }
}
