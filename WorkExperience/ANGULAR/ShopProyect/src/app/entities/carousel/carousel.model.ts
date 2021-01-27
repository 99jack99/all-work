export class Carousel {
    id: number;
    principal: boolean;
    url: string;

    constructor(id: number, principal: boolean, url: string){
        this.id = id;
        this.principal = principal;
        this.url = url;
    }
}