import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Size } from './size.model';

@Injectable({providedIn: 'root'})
export class SizeService {
    public url_end_point = '//localhost:8080/api';

    constructor(private http: HttpClient) {
    }
    public getAll(): Observable <Size[]> {
      return this.http.get<Size[]>(this.url_end_point + '/sizes');
    }

}