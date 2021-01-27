import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoriaArticuloService } from 'app/entities/categoria-articulo/categoria-articulo.service';
import { ICategoriaArticulo } from 'app/shared/model/categoria-articulo.model';

@Component({
  selector: 'jhi-carousel-horizontal',
  templateUrl: './carousel-horizontal.component.html',
  styleUrls: ['./carousel-horizontal.component.scss']
})
export class CarouselHorizontalComponent implements OnInit {

  listCatArt: ICategoriaArticulo[] = []
  constructor(private categoriaArticuloService: CategoriaArticuloService) {
    
    
  
   }

  ngOnInit(): void {
    this.categoriaArticuloService.query().subscribe(
      
      (res: HttpResponse<ICategoriaArticulo[]>) => {
        this.listCatArt = res.body || [];

      },
      () => {
        // Zona Error
      })
  }

}
