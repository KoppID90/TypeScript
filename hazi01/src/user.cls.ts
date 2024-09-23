import { Library } from './library.cls';
import { Book } from './book.cls.ts';

export class User {

    userID: string;
    name: string;
    email: string;
    borrowedBooks: Book[] = [];

    constructor(userID: string, name: string, email: string) {
        this.userID = userID;
        this.name = name;
        this.email = email;
    }

    borrowBook(library: Library, bookId: string){
        const book = library.findBook(bookId);

        if (book) {
            this.borrowedBooks.push(book);

            library.removeBook(bookId);

            console.log(`${this.name} borrowed "${book.title}" by ${book.author}.`);
        } else {
            console.log(`The book is not available in the library.`);
        }
    }
}

