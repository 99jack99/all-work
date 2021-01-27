import { IArticulo } from 'app/shared/model/articulo.model';

export interface ICategoriaArticulo {
  id?: number;
  nombreCategoriaArticulo?: string;
  descriptionCategoriaArticulo?: string;
  logoContentType?: string;
  logo?: any;
  articulos?: IArticulo[];
}

export class CategoriaArticulo implements ICategoriaArticulo {
  constructor(
    public id?: number,
    public nombreCategoriaArticulo?: string,
    public descriptionCategoriaArticulo?: string,
    public logoContentType?: string,
    public logo?: any,
    public articulos?: IArticulo[]
  ) {}
}
