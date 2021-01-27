import { Component, Input, OnInit } from '@angular/core';
import { IArticulo } from 'app/shared/model/articulo.model';

@Component({
  selector: 'jhi-catalogo-item',
  templateUrl: './catalogo-item.component.html',
  styleUrls: ['./catalogo-item.component.scss']
})
export class CatalogoItemComponent implements OnInit {

  @Input() articulo!: IArticulo;
  

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
