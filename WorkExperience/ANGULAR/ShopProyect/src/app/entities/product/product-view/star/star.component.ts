import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input() rate: number;

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  constructor() { 
  }

  ngOnInit(): void {
    this.selectedValue = this.rate;
  }

  countStar(star: number) {
    this.selectedValue = star;
  }

}
