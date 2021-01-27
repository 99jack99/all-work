import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from 'app/entities/articulo/articulo.service';
import { ColoresService } from 'app/entities/colores/colores.service';
import { InfoService } from 'app/entities/info/info.service';
import { IArticulo } from 'app/shared/model/articulo.model';
import { IColores } from 'app/shared/model/colores.model';
import { IInfo } from 'app/shared/model/info.model';


@Component({
  selector: 'jhi-catalogo-producto-page',
  templateUrl: './catalogo-producto-page.component.html',
  styleUrls: ['./catalogo-producto-page.component.scss']
})
export class CatalogoProductoPageComponent implements OnInit {

  articulo!: IArticulo;;
  info!: IInfo[];
  colores!: IColores[];
  id!:number;

  selectedSize ="";
  selectedColor ="";

  outOfStockText = "Out of Stock";
  nreviews = 0;

  constructor(private articulosService: ArticuloService,
              private infoService: InfoService,
              private coloresService: ColoresService,
              private route: ActivatedRoute) {
                if(this.route.snapshot.paramMap.get('id')){
                  this.id = Number(this.route.snapshot.paramMap.get('id'));
                }
  }

  ngOnInit(): void {
    this.articulosService.find(this.id).subscribe((res:HttpResponse<IArticulo>)=> {
      this.articulo = res.body!;
    })
    
    this.infoService.query({'coloresId.equals':this.id}).subscribe((res: HttpResponse<IInfo[]>)=> {
      this.info = res.body|| [];
    })

    this.coloresService.query({'articuloId.equals':this.id}).subscribe((res: HttpResponse<IColores[]>)=> {
      this.colores = res.body || [];
    })


  }

  isOutOfStock():boolean{
    for(const s of this.info){
      if(s.cantidadStock!==0)
      return false
    }
    return true;
  }

  setSelectedTalla(talla: string):void {
    this.selectedSize = talla;
  }

  setSelectedColor(color: string):void {
    this.selectedColor = color;
  }

}
