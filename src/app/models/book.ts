import { Category } from "src/app/models/category";

export class Book {
    
    id: number;

    title: string;
    
    isbn: string;
    
    totalExamplaries: number;
    
    author: string;

    releaseDate: Date;

    registerDate: Date;
    
    category = new Category();
}
