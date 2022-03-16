import { Injectable } from "@angular/core";
import { BookStoreService } from "src/app/stores/book-store.service";
import { Book } from "../../domain-model/book.model";

@Injectable({ providedIn: 'root' })
export class BookFindService{
    constructor(readonly bookStoreSrv: BookStoreService) {}

    getBook(bookId: string): Book {
        return this.bookStoreSrv.getBook(bookId);
    }

    getBooks(): Array<Book>  {     
        return this.bookStoreSrv.getBooks();
    }
}