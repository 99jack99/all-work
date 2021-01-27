import { Size } from './../size/size.model';
import { Category } from './../category/category.model';

export class Product {
    id: number;
    name: string;
    price: number;
    color: string;
    size: Size[];
    rate: number;
    category: Category;
    gender: string;
    favorite: boolean;
    stock: number;
    url: string;

    constructor(){
    }
}