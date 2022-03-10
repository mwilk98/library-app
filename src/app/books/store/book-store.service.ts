import { Injectable } from '@angular/core';
import { Book, BooksStore } from '../domain-model/book.model';
@Injectable({ providedIn: 'root' })
export class BookStoreService {
    private books: BooksStore = {
        '0': { id: '0', title: 'title 1', author: 'author 1', type: 'gatunek 1', releaseDate: new Date() },
        '1': { id: '1', title: 'title 2', author: 'author 2', type: 'gatunek 2', releaseDate: new Date() },
        '2': { id: '2', title: 'title 3', author: 'author 3', type: 'gatunek 3', releaseDate: new Date() },
        '3': { id: '3', title: 'title 4', author: 'author 4', type: 'gatunek 4', releaseDate: new Date() },
        '4': { id: '4', title: 'title 5', author: 'author 5', type: 'gatunek 5', releaseDate: new Date() }
    };

    getBook(bookId: string): Book {
        const bookObj = Object.values(this.books).find((book) => book.id === bookId);
        if(bookObj === undefined){
            throw new Error(`Nie znaleziono wypożyczenia o podanym id: ${bookId}`);
        }
        return bookObj;
    }

    getBooks(): Array<Book> {
        return Object.values(this.books);
    }

    addBook(newBook: Book): Book {
        this.books[this.generateKey(newBook)] = newBook;
        alert('Dodano książkę');
        return newBook;
    }

    updateBook(idBook: string, newBook: Book): Book {
        this.books[idBook] = newBook;
        alert('Zakutaliozwano książkę');
        return newBook;
    }

    deleteBook(idBook: string): void {
        const newBooks: BooksStore = {};
        Object.values(this.books)
        .filter((book) => book.id !== idBook)
        .forEach((book) => {
            newBooks[this.generateKey(book)] = book;
        });
        this.books = newBooks;
    }

    private generateKey(book: Book): string {
        return Object.values(book).join('-');
    }
}
