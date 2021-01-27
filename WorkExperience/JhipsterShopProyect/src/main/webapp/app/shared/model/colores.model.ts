export interface IColores {
  id?: number;
  nombreColor?: string;
  imgContentType?: string;
  img?: any;
  articuloNombre?: string;
  articuloId?: number;
}

export class Colores implements IColores {
  constructor(
    public id?: number,
    public nombreColor?: string,
    public imgContentType?: string,
    public img?: any,
    public articuloNombre?: string,
    public articuloId?: number
  ) {}
}
