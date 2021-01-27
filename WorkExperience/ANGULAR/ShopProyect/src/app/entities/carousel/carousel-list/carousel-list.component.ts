import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from '../carousel.model';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit {

  @Input() carouselVertical: boolean;
  @Input() carouselHorizontal: boolean;

  @Input() carouselsPrincipal: Carousel[];
  @Input() carouselsSecondary: Carousel[];

  constructor() { }

  ngOnInit(): void {
  }

}
