import { Category } from './category.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public url_end_point = '//localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable <Category[]> {
    return this.http.get<Category[]>(this.url_end_point + '/categories');
  }

  public getById(id: Number): Observable <Category> {
    return this.http.get<Category>(this.url_end_point + '/categories' + '/' + id);
  }
}
