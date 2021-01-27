export class Size {
    id: number;
    description: string;
    available: boolean;

    constructor(id: number, description: string, available: boolean) {
        this.id = id;
        this.description = description;
        this.available = available;
    }
}