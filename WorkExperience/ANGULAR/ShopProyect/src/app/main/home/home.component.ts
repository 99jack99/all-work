import { CarouselService } from '../../entities/carousel/carousel.service';
import { Component, OnInit } from '@angular/core';
import { Carousel } from '@entities/carousel/carousel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carousel: boolean;
  carousels: Carousel[] = [];
  carouselsPrincipal: Carousel[] = [];
  carouselsSecondary: Carousel[] = [];

  constructor(private carouselService: CarouselService) {
    this.carousel = true;
  }
  ngOnInit(): void {
    this.getAll(); 
  }

  getAll() {
    this.carouselService.getAll().subscribe(carousels => {
      this.carousels = carousels;
      this.recorrerCarousels(this.carousels);
      console.log(this.carousels);
    });
  }

  recorrerCarousels(carousels: Carousel[]){
    carousels.forEach(element => {
      if(element.principal == true) {
        this.carouselsPrincipal.push(element);
      } else {
        this.carouselsSecondary.push(element);
      }
    });
  }

}

