import { Injectable } from '@angular/core';
import { LendingService } from 'src/app/lending/services/lending.service';
import { BookStoreService } from 'src/app/stores/books/book-store.service';
import { Book } from '../domain-model/book.model';

@Injectable({ providedIn: 'root' })
export class BookService{
    constructor(readonly bookStoreSrv: BookStoreService,
                private readonly lendingSrv: LendingService
    ) {}

    getBook(bookId: string): Book {
        return this.bookStoreSrv.getBook(bookId);
    }

    getBooks(): Array<Book>  {     
        return this.bookStoreSrv.getBooks();
    }

    deleteBook(bookId:string): void {
        if (this.lendingSrv.checkBookIfLent(bookId)) {
            alert('istnieje wypożyczenie nie można usunac ksiazki');
            return;
          }
          this.bookStoreSrv.deleteBook(bookId);
      
    }
    
    addBook(newBook: Book): void {
        this.bookStoreSrv.addBook(newBook);
    }

    updateBook(bookId: string, newBook: Book): void {
        this.bookStoreSrv.updateBook(bookId,newBook);
    }
    
}
