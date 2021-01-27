import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'app/entities/articulo/articulo.service';
import { IArticulo } from 'app/shared/model/articulo.model';

@Component({
  selector: 'jhi-catalogo-page',
  templateUrl: './catalogo-page.component.html',
  styleUrls: ['./catalogo-page.component.scss']
})
export class CatalogoPageComponent implements OnInit {

  listArticulos: IArticulo[] = [];

  constructor(private articulosService: ArticuloService) { }

  ngOnInit(): void {
    this.articulosService.query().subscribe((res: HttpResponse<IArticulo[]>)=> {
      this.listArticulos = res.body ||[];
    })
  }

}
