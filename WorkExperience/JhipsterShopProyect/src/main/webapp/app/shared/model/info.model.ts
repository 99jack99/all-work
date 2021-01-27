export interface IInfo {
  id?: number;
  cantidadStock?: number;
  talla?: string;
  articuloNombre?: string;
  articuloId?: number;
  coloresNombreColor?: string;
  coloresId?: number;
}

export class Info implements IInfo {
  constructor(
    public id?: number,
    public cantidadStock?: number,
    public talla?: string,
    public articuloNombre?: string,
    public articuloId?: number,
    public coloresNombreColor?: string,
    public coloresId?: number
  ) {}
}
