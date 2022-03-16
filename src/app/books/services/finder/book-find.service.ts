import { Injectable } from "@angular/core";
import { BookStoreService } from "src/app/stores/book-store.service";
import { Book } from "../../domain-model/book.model";

/* serwis do obsługi pobrania danych książki */
@Injectable({ providedIn: 'root' })
export class BookFindService{
    constructor(private readonly storeSrv: BookStoreService) {}

    getBook(bookId: string): Book {
        return this.storeSrv.getBook(bookId);
    }

    getBooks(): Array<Book>  {     
        return this.storeSrv.getBooks();
    }
}