import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-white-list',
  templateUrl: './white-list.component.html',
  styleUrls: ['./white-list.component.scss']
})
export class WhiteListComponent implements OnInit {

  @Input() favorite: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
