import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-star-raiting',
  templateUrl: './star-raiting.component.html',
  styleUrls: ['./star-raiting.component.scss']
})
export class StarRaitingComponent implements OnInit {

  @Input() rating!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
