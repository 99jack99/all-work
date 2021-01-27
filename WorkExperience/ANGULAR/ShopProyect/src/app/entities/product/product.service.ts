import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public url_end_point = '//localhost:8080/api';

  constructor(private http: HttpClient) {
  }
  public getAll(): Observable <Product[]> {
    return this.http.get<Product[]>(this.url_end_point + '/products');
  }

  public getProductById(id: Number): Observable <Product> {
    return this.http.get<Product>(this.url_end_point + '/products' + '/' + id);
  }

  public getCount(): Observable <Product> {
    return this.http.get<Product>(this.url_end_point + '/products/count');
  }

  public getByCategory(category: string): Observable <Product[]> {
    return this.http.get<Product[]>(this.url_end_point + '/products/category' + '/' + category );
  }

  public saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url_end_point + '/products', product, { 
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true,
    });
  }

}
