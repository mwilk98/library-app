import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { BaseBookModel } from '../../feat-books/model/book.model';
import { BooksStoreModel } from '../model/base-store.model';

@Injectable({ providedIn: 'root' })
export class BookStoreService {
  books: BehaviorSubject<BooksStoreModel> = new BehaviorSubject<BooksStoreModel>({
    '1': { id: '1', title: 'title 1', author: 'author 1', type: 'gatunek 1', releaseDate: '2022-03-12' },
    '2': { id: '2', title: 'title 2', author: 'author 2', type: 'gatunek 2', releaseDate: '2022-03-12'  },
    '3': { id: '3', title: 'title 3', author: 'author 3', type: 'gatunek 3', releaseDate: '2022-03-12'  },
    '4': { id: '4', title: 'title 4', author: 'author 4', type: 'gatunek 4', releaseDate: '2022-03-12'  },
    '5': { id: '5', title: 'title 5', author: 'author 5', type: 'gatunek 5', releaseDate: '2022-03-12'  }
  });

  getBookList(): Observable<BooksStoreModel> {
    return this.books.pipe(
      map((books: BooksStoreModel) => books)
    ); 
  }

  getBook(idBook: string): BaseBookModel {
    let bookObj! :BaseBookModel;
    this.books.pipe(
      map((books: BooksStoreModel) => Object.values(books)),
      map((books: Array<BaseBookModel>) => {
        const newBooks: BooksStoreModel = {};
        books.forEach((book: BaseBookModel) => {
          if (book.id === idBook) {
            bookObj = book;
          }
        });
        return newBooks;
      })
    )
    .subscribe(() => {})
    .unsubscribe();
    
    return bookObj;  
  }

  addBook(newBook: BaseBookModel): BaseBookModel {
    this.books.pipe(
      map((books: BooksStoreModel) => Object.values(books)),
      map((books: Array<BaseBookModel>) => {
        const newBooks: BooksStoreModel = {};
        books.forEach((book: BaseBookModel) => {
            newBooks[this.generateKey(book)] = book;
        });
        newBooks[this.generateKey(newBook)] = newBook;
        return newBooks;
      }),
      tap((newBooks: BooksStoreModel) => this.books.next(newBooks))
    )
    .subscribe(() => {})
    .unsubscribe();

    return newBook;
  }

  updateBook(idBook: string, newBook: BaseBookModel): BaseBookModel {
    this.books.pipe(
      map((books: BooksStoreModel) => Object.values(books)),
      map((books: Array<BaseBookModel>) => {
        const newBooks: BooksStoreModel = {};
        books.forEach((book: BaseBookModel) => {
          if (book.id !== idBook) {
            newBooks[this.generateKey(book)] = book;
          } else {
            newBooks[this.generateKey(book)] = newBook;
          }
        });
        return newBooks;
      }),
      tap((newBooks: BooksStoreModel) => this.books.next(newBooks))
    )
    .subscribe(() => {})
    .unsubscribe();

    return newBook;
  }

  deleteBook(idBook: string): void {
    this.books.pipe(
      map((books: BooksStoreModel) => Object.values(books)),
      map((books: Array<BaseBookModel>) => {
        const newBooks: BooksStoreModel = {};
        books.forEach((book: BaseBookModel) => {
          if (book.id !== idBook) {
            newBooks[this.generateKey(book)] = book;
          }
        });
        return newBooks;
      }),
      tap((newBooks: BooksStoreModel) => this.books.next(newBooks))
    )
    .subscribe(() => {})
    .unsubscribe();
  }

  private generateKey(book: BaseBookModel): string {
    return Object.values(book).join('-');
  }
}
