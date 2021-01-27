import { Component, Input, OnInit } from '@angular/core';
import { ICategoriaArticulo } from 'app/shared/model/categoria-articulo.model';

@Component({
  selector: 'jhi-carousel-horizontal-item',
  templateUrl: './carousel-horizontal-item.component.html',
  styleUrls: ['./carousel-horizontal-item.component.scss']
})
export class CarouselHorizontalItemComponent implements OnInit {
@Input() catArt!: ICategoriaArticulo

  constructor() { }

  ngOnInit(): void {
  }

}
