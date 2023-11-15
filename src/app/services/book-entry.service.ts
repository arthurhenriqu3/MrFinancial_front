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
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("user-token") };
    return this.http.post<BookEntry>(this.apiUrl, bookEntry, {headers});
  }

  public register(bookEntry: BookEntry): Observable<BookEntry> {
    if(bookEntry.id){
      return this.update(bookEntry);
    }else{
      return this.insert(bookEntry);
    }
  }

  public insert(bookEntry: BookEntry): Observable<BookEntry> {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("user-token") };
    return this.http.post<BookEntry>(this.apiUrl, bookEntry, {headers});
  }

  public update(bookEntry:BookEntry):Observable<BookEntry>{
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("user-token") };
    return this.http.put<BookEntry>(this.apiUrl, bookEntry, {headers});
  }

  public delete(id:string){
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("user-token") };
    this.http.delete(this.apiUrl+"/"+id, {headers}).subscribe();
  }

  public findById(id:string): Observable<BookEntry>{
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("user-token") };
    return this.http.get<BookEntry>(this.apiUrl + '/' + id, {headers});
  }

  public findAll(): Observable<BookEntry[]>{
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("user-token") };
    return this.http.get<BookEntry[]>(this.apiUrl, {headers});
  }
}
