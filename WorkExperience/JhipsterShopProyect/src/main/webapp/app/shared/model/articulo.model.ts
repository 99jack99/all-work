export interface IArticulo {
  id?: number;
  nombre?: string;
  precio?: number;
  precioOferta?: number;
  isFav?: boolean;
  imgContentType?: string;
  img?: any;
  rating?: number;
  categoriaArticuloNombreCategoriaArticulo?: string;
  categoriaArticuloId?: number;
}

export class Articulo implements IArticulo {
  constructor(
    public id?: number,
    public nombre?: string,
    public precio?: number,
    public precioOferta?: number,
    public isFav?: boolean,
    public imgContentType?: string,
    public img?: any,
    public rating?: number,
    public categoriaArticuloNombreCategoriaArticulo?: string,
    public categoriaArticuloId?: number
  ) {
    this.isFav = this.isFav || false;
  }
}
