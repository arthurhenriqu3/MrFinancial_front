import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl:string;

  constructor(private http:HttpClient) {
    this.apiUrl = environment.API_HOST + 'category';
  }

  public create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

  public register(category: Category): Observable<Category> {
    if(category.id){
      return this.update(category);
    }else{
      return this.insert(category);
    }
  }

  public insert(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

  public update(category:Category):Observable<Category>{
    return this.http.put<Category>(this.apiUrl, category);
  }

  public delete(id:string){
    this.http.delete(this.apiUrl+"/"+id).subscribe();
  }

  public findById(id:string): Observable<Category>{
    return this.http.get<Category>(this.apiUrl + '/' + id);
  }

  public findAll(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl);
  }
}
