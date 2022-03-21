import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { BookStoreService } from "src/app/store/book-store.service";
import { Book, BooksStore } from "../../model/book.model";


/* serwis do obsługi pobrania danych książki */
@Injectable({ providedIn: 'root' })
export class BookFindService{
    constructor(private readonly storeSrv: BookStoreService) {}

    getBook(bookId: string): Book {
        return this.storeSrv.getBook(bookId);
    }

    getBooks(): Observable<BooksStore> {     

        return this.storeSrv.getBooks()
    }
}