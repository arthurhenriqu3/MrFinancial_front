import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}category`;

  constructor(private http:HttpClient) { }

  public create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

  public findById(id:string){
    return this.http.get<Category>(this.apiUrl + "/" + id);
  }

  public findAll(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl);
  }
}
