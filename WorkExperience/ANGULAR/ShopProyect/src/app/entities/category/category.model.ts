export class Category {
    id: number;
    description: string;
    url?: string;

    constructor(id: number, description: string, url: string){
        this.id = id;
        this.description = description;
        this.url = url;
    }
}