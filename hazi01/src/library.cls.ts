import{ Book } from './book.cls.ts'
import { ILibrary } from '../interfaces/ILibrary.ts'

export class Library implements ILibrary {

    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void{
        this.books.push(book);
    }

    removeBook(id: string): void {
        const index = this.books.findIndex(book => book.id === id);
        this.books.splice(index, 1);
    }

    findBook(id: string): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    listAllBooks(){
        return this.books;
    }

}