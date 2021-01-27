import { Injectable } from '@angular/core';
import { Carousel } from './carousel.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  public url_end_point = '//localhost:8080/api';

  constructor(private http: HttpClient) {
  }
  
  public getAll(): Observable <Carousel[]> {
    return this.http.get<Carousel[]>(this.url_end_point + '/carousels');
  }

}
