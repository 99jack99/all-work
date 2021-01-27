export class ArticuloFilter {
    
    constructor(public nombre?: string, public esFav?: boolean ){}
    
    toMap(): any {
        const map = new Map();
        if(this.nombre !=null) {
            map.set('nombre.contains', this.nombre);
        }
        if(this.esFav!=null) {
            map.set('esFav.equals', this.esFav)
        }
        return map;
    }
}