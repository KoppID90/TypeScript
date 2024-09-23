import { Book } from '../src/book.cls.ts'

export interface ILibrary {
    
    addBook(book: Book): void
    removeBook(book: string): void
    findBook(id: string): Book | undefined
    listAllBooks(): Book[]

}